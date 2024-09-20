import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        eventName: {
            type: String,
            trim: true,
            required: true,
        },
        eventDate: {
            type: Date,
            required: true,
        },
        eventTime: {
            type: String,
            trim: true,
            required: true,
        },
        eventLocation: {
            type: String,
            trim: true,
            required: true,
        },
        eventDescription: {
            type: String,
            trim: true,
            required: true,
        },
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
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
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
        collection: "posts",
    }
);

const Event = mongoose.model("Event", eventSchema, "posts");

export default Event;
