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

import { encrypt, decrypt } from "./utils/encryptionCrypto.js";

import Redis from "ioredis";
const redis = new Redis({
    host: "127.0.0.1",
    port: 6379,
});

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

// Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

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

const server = http.createServer(app);

const io = new SocketIOServer(server, {
    cors: {
        origin: "*", // Set to your frontend's origin in production
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("User connected with the following socket id:", socket.id);

    // Handle user disconnect
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });

    // Start a new chat and preload previous messages if any
    socket.on("startChat", async (userId1, userId2) => {
        // Getting the needed room
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

            // Try to load messages from Redis cache first
            const cachedMessages = await redis.lrange(`chat:${roomId}`, 0, -1);
            let initialMessages;

            if (cachedMessages.length > 0) {
                console.log(cachedMessages);
                initialMessages = cachedMessages.map((msg) => JSON.parse(msg));
            } else {
                initialMessages = await Message.find({ roomId })
                    .sort({ createdAt: -1 })
                    .limit(20)
                    .lean();

                initialMessages.reverse().forEach((msg) => {
                    const decryptedContent = decrypt(msg.content, msg.iv);
                    msg.content = decryptedContent;
                    redis.rpush(
                        `chat:${roomId}`,
                        JSON.stringify({
                            content: decryptedContent,
                            iv: msg.iv,
                            senderId: msg.senderId,
                            receiverId: msg.receiverId,
                            createdAt: msg.createdAt,
                        })
                    );
                });
                redis.ltrim(`chat:${roomId}`, -20, -1);
            }

            socket.emit("preloadMessages", initialMessages);
        } catch (err) {
            console.error("Error while creating or retrieving room:", err);
            socket.emit("preloadMessages", []);
        }
    });

    socket.on("chat message", async (data) => {
        const { roomId, senderId, receiverId, content } = data;

        // Encrypt the content
        const encryptedMessage = encrypt(content);

        try {
            const senderIdFormatted = new mongoose.Types.ObjectId(senderId);
            const receiverIdFormatted = new mongoose.Types.ObjectId(receiverId);

            const newMessage = new Message({
                senderId: senderIdFormatted,
                receiverId: receiverIdFormatted,
                content: encryptedMessage.content,
                iv: encryptedMessage.iv,
                roomId: roomId,
                delivered: false,
            });

            // Save to MongoDB
            await newMessage.save();

            // Maintain only the latest 20 messages in Redis
            const messageCount = await redis.llen(`chat:${roomId}`);
            if (messageCount >= 20) {
                await redis.lpop(`chat:${roomId}`); // Remove the oldest message
            }

            // Add the new message to the end of the list in Redis
            await redis.rpush(
                `chat:${roomId}`,
                JSON.stringify({
                    content: encryptedMessage.content,
                    iv: encryptedMessage.iv,
                    senderId,
                    receiverId,
                })
            );

            // Broadcast the new message to all clients in the room
            io.to(roomId).emit("receiveMessage", {
                senderId,
                content: content,
                roomId,
            });
        } catch (error) {
            console.error("Error saving message:", error);
        }
    });
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
