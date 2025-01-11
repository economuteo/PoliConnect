import { Router } from "express";
import {
    addComment,
    removeComment,
    editComment,
    getAllCommentsFromAPost,
} from "../controllers/commentsController.js";

const router = Router();

router.get("/getAllCommentsFromAPost", getAllCommentsFromAPost);
router.post("/addComment", addComment);
router.post("/removeComment", removeComment);
router.patch("/editComment", editComment);

export default router;
