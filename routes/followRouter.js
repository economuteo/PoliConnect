import { Router } from "express";
import { followUser, unfollowUser } from "../controllers/followControler.js";

const router = Router();

router.post("/followUser", followUser);
router.post("/unfollowUser", unfollowUser);

export default router;
