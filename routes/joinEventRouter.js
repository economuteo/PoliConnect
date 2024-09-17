import { Router } from "express";
import { joinEvent, leaveEvent } from "../controllers/joinEventController.js";

const router = Router();

router.post("/joinEvent", joinEvent);
router.post("/leaveEvent", leaveEvent);

export default router;
