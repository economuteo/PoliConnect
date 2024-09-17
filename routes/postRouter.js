import { Router } from "express";
import { addEvent, addPhotoPost, getFirstPost } from "../controllers/postController.js";

import upload from "../middleware/multerMiddleware.js";

const router = Router();

// Add posts
router.post("/addEvent", addEvent);
router.post("/addPhotoPost", upload.single("photoPost"), addPhotoPost);

// Get posts
router.get("/firstPost", getFirstPost);

export default router;
