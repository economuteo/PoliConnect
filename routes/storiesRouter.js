import { Router } from "express";
const router = Router();

import { addStory, getUserStories } from "../controllers/storiesController.js";

import upload from "../middleware/multerMiddleware.js";

router.get("/getUserStories", getUserStories);
router.post("/addStory", upload.single("story"), addStory);
// router.post("/removeStory", removeStory);

export default router;
