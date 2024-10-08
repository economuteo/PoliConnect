import { Router } from "express";
import {
    getApplicationStats,
    getCurrentUser,
    updateUser,
    searchUsers,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/currentUser", getCurrentUser);
router.patch("/updateUser", validateUpdateUserInput, updateUser);
router.get("/admin/appStats", authorizePermissions("admin"), getApplicationStats);
router.get("/searchUsers", searchUsers);

export default router;
