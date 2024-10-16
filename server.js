import "express-async-errors";

import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

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

            console.log(`Successfully deleted all related data for user ${deletedUserId}.`);
        } catch (error) {
            console.error(`Error cleaning up data for user ${deletedUserId}: `, error);
        }
    });
}

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const port = process.env.PORT || 8080;

try {
    await mongoose.connect(process.env.MONGO_URL);
    const db = mongoose.connection.db;

    startChangeStream(db);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(cookieParser());
app.use(express.json());

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

app.use("*", (req, res) => {
    res.status(404).json({ msg: "Not found" });
});

app.use(errorHandlerMiddleware);
