import { Router } from "express";
import { addEvent, addPhotoPost, getFirstPost } from "../controllers/postController.js";

import upload from "../middleware/multerMiddleware.js";

const router = Router();

router.post("/addEvent", addEvent);
router.post("/addPhotoPost", upload.single("photoPost"), addPhotoPost);

router.get("/firstPost", getFirstPost);

export default router;
