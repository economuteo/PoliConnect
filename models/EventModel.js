import mongoose from "mongoose";
import Base from './BaseModel.js'

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
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
);

const Event = Base.discriminator("Event", eventSchema);

export default Event;
