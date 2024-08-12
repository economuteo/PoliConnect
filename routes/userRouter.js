import { Router } from "express";
import { getApplicationStats, getCurrentUser, updateUser } from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/currentUser", getCurrentUser);
router.get("/admin/appStats", authorizePermissions("admin"), getApplicationStats);
router.patch("/updateUser", validateUpdateUserInput, updateUser);

export default router;
