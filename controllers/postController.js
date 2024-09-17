import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Message from "../models/MessageModel.js";
import Event from "../models/EventModel.js";

export const addEvent = async (req, res) => {
    const { eventName, eventDate, eventTime, eventLocation, eventDescription, createdBy } =
        req.body;

    try {
        const event = new Event({
            eventName,
            eventDate,
            eventTime,
            eventLocation,
            eventDescription,
            createdBy,
        });

        await event.save();

        res.status(StatusCodes.CREATED).json(event);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};

export const getFirstPost = async (req, res) => {
    const { userId } = req.params; // Assuming userId is passed as a URL parameter

    try {
        const post = await Post.findOne({ createdBy: userId }).sort({ createdAt: -1 }).exec();

        if (!post) {
            return res
                .status(StatusCodes.NOT_FOUND)
                .json({ error: "No posts found for this user" });
        }

        res.status(StatusCodes.OK).json(post);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};
