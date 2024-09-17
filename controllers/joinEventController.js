import { getCurrentUserUsingToken } from "./userController.js";
import { StatusCodes } from "http-status-codes";
import Event from "../models/EventModel.js";
import { NotFoundError, BadRequestError } from "../errors/customErrors.js";

export const joinEvent = async (req, res) => {
    const currentUser = await getCurrentUserUsingToken(req);
    const { eventId } = req.body;

    try {
        const event = await Event.findById(eventId);
        if (!event) {
            throw new NotFoundError("Event not found");
        }

        if (!event.participants.includes(currentUser._id)) {
            event.participants.push(currentUser._id);
            await event.save();
        }

        res.status(StatusCodes.OK).json({ message: "Joined event successfully", event });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};

export const leaveEvent = async (req, res) => {
    const currentUser = await getCurrentUserUsingToken(req);
    const { eventId } = req.body;

    try {
        const event = await Event.findById(eventId);
        if (!event) {
            throw new NotFoundError("Event not found");
        }

        const participantIndex = event.participants.indexOf(currentUser._id);
        if (participantIndex !== -1) {
            event.participants.splice(participantIndex, 1);
            await event.save();
        }

        res.status(StatusCodes.OK).json({ message: "Left event successfully", event });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};
