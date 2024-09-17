import { Router } from "express";
import { likePost, unlikePost } from "../controllers/likesController.js";

const router = Router();

router.post("/likePost", likePost);
router.post("/unlikePost", unlikePost);

export default router;
