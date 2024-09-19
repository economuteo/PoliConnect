import { Router } from "express";
import {
    addEvent,
    addPhotoPost,
    getFirstPost,
    getAllPostsForAUser,
} from "../controllers/postController.js";

import upload from "../middleware/multerMiddleware.js";

const router = Router();

// Get posts
router.get("/firstPost", getFirstPost);
router.get("/getAllPostsForAUser", getAllPostsForAUser); // Sorted by creation date (newest)

// Add posts
router.post("/addEvent", addEvent);
router.post("/addPhotoPost", upload.single("photoPost"), addPhotoPost);

export default router;
