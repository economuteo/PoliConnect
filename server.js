import "express-async-errors";

import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// routers
import messageRouter from "./routes/messageRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

// middleware
import { authenticateUser } from "./middleware/authMiddleware.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

import cloudinary from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const port = process.env.PORT || 8080;

try {
    await mongoose.connect(process.env.MONGO_URL);
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

app.use("/api/v1/messages", authenticateUser, messageRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

app.use("*", (req, res) => {
    res.status(404).json({ msg: "Not found" });
});

app.use(errorHandlerMiddleware);
