import Message from "../models/MessageModel.js";
import { StatusCodes } from "http-status-codes";

import { encrypt, decrypt } from "../utils/encryptionCrypto.js";

import { NotFoundError } from "../errors/customErrors.js";

export const getAllMessages = async (req, res) => {
    const messages = await Message.find({ createdBy: req.user.userId });
    res.status(StatusCodes.OK).json(messages);
};

export const createMessage = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const message = await Message.create(req.body);
    res.status(StatusCodes.CREATED).json(message);
};

export const getMessage = async (req, res) => {
    const { id } = req.params;
    const message = await Message.findById(id);
    res.status(StatusCodes.OK).json(message);
};

export const getOlderMessages = async (req, res) => {
    const { roomId, lastMessageId, limit } = req.body;

    try {
        const olderMessages = await Message.find({ roomId, _id: { $lt: lastMessageId } })
            .sort({ _id: -1 })
            .limit(limit);

        const olderMessagesInGoodOrder = olderMessages.reverse();

        const olderMessagesDecrypted = olderMessagesInGoodOrder.map((msg) => {
            const decryptedContent = decrypt(msg.content, msg.iv);
            msg.content = decryptedContent;
            return msg;
        });

        // Reverse the array to maintain chronological order
        res.status(200).json(olderMessagesDecrypted);
    } catch (error) {
        console.error("Error fetching older messages:", error);
        res.status(500).json({ error: "Failed to fetch older messages" });
    }
};

export const editMessage = async (req, res) => {
    const { id } = req.params;
    const updatedMessage = await Message.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    res.status(StatusCodes.OK).json({ msg: "Message modified", message: updatedMessage });
};

export const deleteMessage = async (req, res) => {
    const { id } = req.params;
    const removedMessage = await Message.findByIdAndDelete(id);
    res.status(StatusCodes.OK).json({
        msg: "Message deleted",
        message: removedMessage,
    });
};
