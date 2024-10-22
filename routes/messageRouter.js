import { Router } from "express";
const router = Router();

import {
    getAllMessages,
    getMessage,
    createMessage,
    editMessage,
    deleteMessage,
} from "../controllers/messageController.js";

import { validateMessageInput, validateIdParam } from "../middleware/validationMiddleware.js";

router.route("/").get(getAllMessages).post(validateMessageInput, createMessage);
router
    .route("/:id")
    .get(validateIdParam, getMessage)
    .patch(validateMessageInput, validateIdParam, editMessage)
    .delete(validateIdParam, deleteMessage);

router.post("/sendMessage", async (req, res) => {
    const { senderId, receiverId, content } = req.body;

    const encryptedMessage = encrypt(content);
    const message = new Message({
        sender: senderId,
        receiver: receiverId,
        content: JSON.stringify(encryptedMessage),
    });

    await message.save();

    res.status(201).json({ message: "Message sent" });
});

export default router;
