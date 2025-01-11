import { Router } from "express";
import {
    addEvent,
    addPhotoPost,
    getFirstPost,
    getSpecificPost,
    getFirstPostForTheCurrentUser,
    getNoOfPostsForTheCurrentUser,
} from "../controllers/postController.js";

import upload from "../middleware/multerMiddleware.js";

const router = Router();

// Get posts
router.get("/firstPost", getFirstPost);
router.get("/specificPost", getSpecificPost);
router.get("/getFirstPostForTheCurrentUser", getFirstPostForTheCurrentUser);

// Fetch posts in batches of maximum 5 posts
router.post("/getNoOfPostsForTheCurrentUser", getNoOfPostsForTheCurrentUser);

// Add posts
router.post("/addEvent", addEvent);
router.post("/addPhotoPost", upload.single("photoPost"), addPhotoPost);

export default router;
