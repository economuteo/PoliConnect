import { Router } from "express";
import { joinEvent, leaveEvent, checkJoinedStatus } from "../controllers/joinEventController.js";

const router = Router();

router.post("/joinEvent", joinEvent);
router.post("/leaveEvent", leaveEvent);

// Helper function
router.post("/checkJoinedStatus", checkJoinedStatus);

export default router;
