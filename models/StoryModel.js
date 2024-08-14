import mongoose from "mongoose";

const StorySchema = new mongoose.Schema({
    mediaUrl: {
        type: String,
        required: true,
    },
    mediaType: {
        type: String,
        enum: ["image", "video"],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: "24h",
    },
});
