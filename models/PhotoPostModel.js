import mongoose from "mongoose";

const photoPostSchema = new mongoose.Schema(
    {
        mediaUrl: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
        eventType: {
            type: String,
            enum: ["PhotoPost", "Event"],
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            // required: true,
        },
    },
    {
        timestamps: true,
    }
);

const PhotoPost = mongoose.model("PhotoPost", photoPostSchema, "posts");

export default PhotoPost;
