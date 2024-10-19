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
import PhotoPosts from "./models/PhotoPostModel.js";
import Stories from "./models/StoryModel.js";

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

import { authenticateUser } from "./middleware/authMiddleware.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

import cloudinary from "cloudinary";

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

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}
