import { Router } from "express";
import {
    addEvent,
    addPhotoPost,
    getFirstPost,
    getSpecificPost,
    getAllPostsForTheCurrentUser,
} from "../controllers/postController.js";

import upload from "../middleware/multerMiddleware.js";

const router = Router();

// Get posts
router.get("/firstPost", getFirstPost);
router.get("/specificPost", getSpecificPost);
router.get("/getAllPostsForTheCurrentUser", getAllPostsForTheCurrentUser);

// Add posts
router.post("/addEvent", addEvent);
router.post("/addPhotoPost", upload.single("photoPost"), addPhotoPost);

export default router;
