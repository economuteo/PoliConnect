import { Router } from "express";
const router = Router();

import { getCurrentRoomId } from "../controllers/roomsController.js";

router.post("/getCurrentRoomId", getCurrentRoomId);

export default router;
