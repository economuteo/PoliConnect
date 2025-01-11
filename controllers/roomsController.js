import Room from "../models/RoomModel.js";
import { StatusCodes } from "http-status-codes";

export const getCurrentRoomId = async (req, res) => {
    const { currentUserId, receiverUserId } = req.body;

    if (!currentUserId || !receiverUserId) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: "User IDs are required" });
    }

    const users = [currentUserId, receiverUserId].sort();

    try {
        let room = await Room.findOne({ userIds: users });
        const roomId = room.roomId;

        return res.status(StatusCodes.OK).json({ roomId: roomId });
    } catch (err) {
        console.error("Error while retrieving or creating room:", err);
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ error: "Internal Server Error" });
    }
    res.StatusCodes.Ok;
};
