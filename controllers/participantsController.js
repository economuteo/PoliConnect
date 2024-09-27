import Event from "../models/EventModel.js";
import User from "../models/UserModel.js";
import { getCurrentUserUsingToken } from "./userController.js";
import { StatusCodes } from "http-status-codes";
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

export const checkJoinedStatus = async (req, res) => {
    try {
        let hasJoined;

        const currentUser = await getCurrentUserUsingToken(req);

        const post = req.body.post;

        if (post.participants.some((userId) => userId.toString() === currentUser._id.toString())) {
            hasJoined = true;
        } else {
            hasJoined = false;
        }

        res.status(StatusCodes.OK).json(hasJoined);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};

export const getUsersWhoJoined = async (req, res) => {
    try {
        const post = req.body.post;

        const participants = post.participants.slice(0, 100);

        const usersWhoJoined = await Promise.all(
            participants.map(async (userId) => {
                let participant = await User.findById(userId);

                participant = participant.toJSON();

                return participant;
            })
        );

        res.status(StatusCodes.OK).json(usersWhoJoined);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};
