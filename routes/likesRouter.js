import { Router } from "express";
import { getSpecificPost } from "../controllers/postController.js";
import {
    likePost,
    unlikePost,
    checkLikeStatus,
    getUsersThatLikedThePost,
} from "../controllers/likesController.js";

const router = Router();

router.post("/likePost", getSpecificPost, likePost);
router.post("/unlikePost", getSpecificPost, unlikePost);
router.post("/getUsersThatLikedThePost", getSpecificPost, getUsersThatLikedThePost);

// Helper functions
router.post("/checkLikeStatus", getSpecificPost, checkLikeStatus);

export default router;
