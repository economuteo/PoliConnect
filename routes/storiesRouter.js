import { Router } from "express";
const router = Router();

import {
    addStory,
    getUserStories,
    getCurrentUserStories,
    getStoriesOfFollowingUsers,
} from "../controllers/storiesController.js";

import upload from "../middleware/multerMiddleware.js";

router.get("/getUserStories", getUserStories);
router.get("/getCurrentUserStories", getCurrentUserStories);
router.get("/getStoriesOfFollowingUsers", getStoriesOfFollowingUsers);

router.post("/addStory", upload.single("story"), addStory);
// router.post("/removeStory", removeStory);

export default router;
