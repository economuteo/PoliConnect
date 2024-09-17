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
        likes: {
            type: Number,
            default: 0,
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const PhotoPost = mongoose.model("PhotoPost", photoPostSchema);

export default PhotoPost;
