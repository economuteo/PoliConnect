import mongoose from "mongoose";

const baseOptions = {
    discriminatorKey: "type",
    collection: "posts",
    timestamps: true,
};

const BaseSchema = new mongoose.Schema(
    {
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
        typeOfPost: {
            type: String,
            enum: ["PhotoPost", "EventPost"],
            required: true,
        },
        createdBy: {
            type: "string",
            required: true,
        },
    },
    baseOptions
);

const Base = mongoose.model("Base", BaseSchema);

export default Base;
