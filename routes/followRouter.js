import { Router } from "express";
import { followUser, unfollowUser, isUserFollowed } from "../controllers/followControler.js";

const router = Router();

router.post("/followUser", followUser);
router.post("/unfollowUser", unfollowUser);
router.post("/isUserFollowed", isUserFollowed);

export default router;
