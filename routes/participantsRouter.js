import { Router } from "express";
import {
    joinEvent,
    leaveEvent,
    checkJoinedStatus,
    getUsersWhoJoined,
} from "../controllers/participantsController.js";

const router = Router();

router.post("/joinEvent", joinEvent);
router.post("/leaveEvent", leaveEvent);
router.post("/getUsersWhoJoined", getUsersWhoJoined);

router.post("/checkJoinedStatus", checkJoinedStatus);

export default router;
