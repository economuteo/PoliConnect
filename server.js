import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import path from "path";
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import Users from "./models/UserModel.js";
import Events from "./models/EventModel.js";
import Message from "./models/MessageModel.js";
import PhotoPosts from "./models/PhotoPostModel.js";
import Stories from "./models/StoryModel.js";
import Room from "./models/RoomModel.js";

// routers
import userRouter from "./routes/userRouter.js";
import storiesRouter from "./routes/storiesRouter.js";
import authRouter from "./routes/authRouter.js";
import messageRouter from "./routes/messageRouter.js";
import followRouter from "./routes/followRouter.js";
import postRouter from "./routes/postRouter.js";
import commentsRouter from "./routes/commentsRouter.js";
import likesRouter from "./routes/likesRouter.js";
import participantsRouter from "./routes/participantsRouter.js";
import roomsRouter from "./routes/roomsRouter.js";

import { authenticateUser } from "./middleware/authMiddleware.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

import cloudinary from "cloudinary";
import http from "http";
import { Server as SocketIOServer } from "socket.io";

import redis from "redis";
import redisAdapter from "socket.io-redis";

// Create Redis client
const redisClient = redis.createClient({ host: "localhost", port: 6379 });

// Handle Redis connection errors
redisClient.on("error", (err) => {
    console.error("Redis error:", err);
});

// Connect Redis client
(async () => {
    try {
        await redisClient.connect();
        console.log("Redis client connected");
    } catch (error) {
        console.error("Error connecting to Redis:", error);
    }
})();

// Middleware
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev")); // Logging in development
}
app.use(cookieParser());
app.use(express.json());

// API Routes (Define these first)
app.get("/api/v1/test", (req, res) => {
    res.json({ msg: "test route" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/followers", authenticateUser, followRouter);
app.use("/api/v1/stories", authenticateUser, storiesRouter);
app.use("/api/v1/messages", authenticateUser, messageRouter);
app.use("/api/v1/posts", authenticateUser, postRouter);
app.use("/api/v1/participants", authenticateUser, participantsRouter);
app.use("/api/v1/comments", authenticateUser, commentsRouter);
app.use("/api/v1/likes", authenticateUser, likesRouter);
app.use("/api/v1/rooms", authenticateUser, roomsRouter);

// Static file serving and catch-all for production (for React front-end)
if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();

    // Serve static files from the React app
    app.use(express.static(path.join(__dirname, "/frontend/build")));

    // Catch-all route to serve the React app for any other requests
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    );
} else {
    // Default route for development
    app.get("/", (req, res) => {
        res.send("API is running...");
    });
}

// 404 Handler for unmatched API routes
app.use("*", (req, res) => {
    res.status(404).json({ msg: "Not found" });
});

// Error Handling Middleware
app.use(errorHandlerMiddleware);

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const server = http.createServer(app);

const io = new SocketIOServer(server, {
    cors: {
        origin: "*", // Set to your frontend's origin in production
        methods: ["GET", "POST"],
    },
});

// Attach Redis adapter to Socket.IO
io.adapter(redisAdapter({ host: "localhost", port: 6379 }));

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    // Handle user disconnect
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });

    // Start a new chat
    socket.on("startChat", async (userId1, userId2) => {
        const users = [userId1, userId2].sort();
        const roomId = `room_${users.join("_")}`;

        try {
            let room = await Room.findOne({ userIds: users });

            if (!room) {
                room = new Room({ userIds: users, roomId });
                await room.save();
                console.log(`Created new room: ${roomId}`);
            } else {
                console.log(`Room already exists: ${room.roomId}`);
            }

            socket.join(roomId);
            console.log(`User ${userId1} joined room ${roomId}`);
        } catch (err) {
            console.error("Error while creating or retrieving room:", err);
        }
    });

    // Server-side: In your socket.io logic
    socket.on("chat message", async (data) => {
        const { roomId, senderId, receiverId, content } = data;

        io.to(roomId).emit("receiveMessage", { senderId, content, roomId });

        try {
            const senderIdFormatted = new mongoose.Types.ObjectId(senderId);
            const receiverIdFormatted = new mongoose.Types.ObjectId(receiverId);

            const newMessage = new Message({
                senderId: senderIdFormatted,
                receiverId: receiverIdFormatted,
                content: content,
                roomId: roomId,
                delivered: false,
            });
            await newMessage.save();
        } catch (error) {
            console.error("Error saving message:", error);
        }
    });

    // const undeliveredMessages = await Message.find({ receiverId: userId, delivered: false });
    // undeliveredMessages.forEach((message) => {
    //     socket.emit("receiveMessage", {
    //         senderId: message.senderId,
    //         content: message.content,
    //     });

    //     // Mark the message as delivered after sending
    //     message.delivered = true;
    //     message.save();
    // });
});

// Function to start the change stream for watching deletions
async function startChangeStream(db) {
    const userCollection = db.collection("users");

    const changeStream = userCollection.watch([{ $match: { operationType: "delete" } }]);

    changeStream.on("change", async (change) => {
        const deletedUserId = change.documentKey._id;
        console.log(`User ${deletedUserId} deleted. Cleaning up related data...`);

        try {
            await PhotoPosts.deleteMany({ createdBy: deletedUserId });
            await Events.deleteMany({ createdBy: deletedUserId });
            await Stories.deleteMany({ user: deletedUserId });

            await PhotoPosts.updateMany({}, { $pull: { likes: deletedUserId } });
            await Events.updateMany({}, { $pull: { likes: deletedUserId } });
            await Events.updateMany({}, { $pull: { participants: deletedUserId } });

            await Users.updateMany(
                { following: deletedUserId },
                { $pull: { following: deletedUserId } }
            );

            await Users.updateMany(
                { followers: deletedUserId },
                { $pull: { followers: deletedUserId } }
            );

            console.log(`Successfully deleted all related data for user ${deletedUserId}.`);
        } catch (error) {
            console.error(`Error cleaning up data for user ${deletedUserId}: `, error);
        }
    });
}

// Connect to MongoDB and Start Server
const port = process.env.PORT || 8080;

try {
    await mongoose.connect(process.env.MONGO_URL);
    const db = mongoose.connection.db;

    // Start change stream monitoring for user deletions
    startChangeStream(db);

    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}
