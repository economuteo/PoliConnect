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

export default router;
