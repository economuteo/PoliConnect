import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Message from "../models/MessageModel.js";
import Event from "../models/EventModel.js";

export const addEvent = async (req, res) => {
    const { eventName, eventDate, eventTime, eventLocation, eventDescription } = req.body;

    try {
        const event = new Event({
            eventName,
            eventDate,
            eventTime,
            eventLocation,
            eventDescription,
        });

        await event.save();

        res.status(StatusCodes.CREATED).json(event);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};
