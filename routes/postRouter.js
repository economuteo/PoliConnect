import { Router } from "express";
import {
    addEvent,
    addPhotoPost,
    getFirstPost,
    getSpecificPost,
    getFirstPostForTheCurrentUser,
    getNoOfPostForTheCurrentUser,
} from "../controllers/postController.js";

import upload from "../middleware/multerMiddleware.js";

const router = Router();

// Get posts
router.get("/firstPost", getFirstPost);
router.get("/specificPost", getSpecificPost);
router.get("/getFirstPostForTheCurrentUser", getFirstPostForTheCurrentUser);
router.get("/getNoOfPostForTheCurrentUser", getNoOfPostForTheCurrentUser);

// Add posts
router.post("/addEvent", addEvent);
router.post("/addPhotoPost", upload.single("photoPost"), addPhotoPost);

export default router;
