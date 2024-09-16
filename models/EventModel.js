import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        eventName: {
            type: String,
            required: true,
            trim: true,
        },
        eventDate: {
            type: Date,
            required: true,
        },
        eventTime: {
            type: String,
            required: true,
            trim: true,
        },
        eventLocation: {
            type: String,
            required: true,
            trim: true,
        },
        eventDescription: {
            type: String,
            required: true,
            trim: true,
        },
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

const Event = mongoose.model("Event", eventSchema);

export default Event;
