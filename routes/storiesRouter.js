import { Router } from "express";
const router = Router();

import {
    addStory,
    deleteStory,
    getUserStories,
    getCurrentUserStories,
    getStoriesOfFollowingUsers,
} from "../controllers/storiesController.js";

import upload from "../middleware/multerMiddleware.js";

router.get("/getUserStories", getUserStories);
router.get("/getCurrentUserStories", getCurrentUserStories);
router.get("/getStoriesOfFollowingUsers", getStoriesOfFollowingUsers);

router.post("/addStory", upload.single("story"), addStory);
router.post("/deleteStory", deleteStory);

export default router;
