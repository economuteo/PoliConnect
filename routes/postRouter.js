import { Router } from "express";
import { addEvent } from "../controllers/postController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/addEvent", addEvent);

export default router;
