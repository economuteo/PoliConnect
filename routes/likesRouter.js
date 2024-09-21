import { Router } from "express";
import { getSpecificPost } from "../controllers/postController.js";
import { likePost, unlikePost } from "../controllers/likesController.js";

const router = Router();

router.post("/likePost", getSpecificPost, likePost);
router.post("/unlikePost", getSpecificPost, unlikePost);

export default router;
