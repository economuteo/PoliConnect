import { Router } from "express";
import {
    getApplicationStats,
    getCurrentUserUsingToken,
    getSpecificUser,
    updateUser,
    searchUsers,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/currentUser", getCurrentUserUsingToken);
router.get("/specificUser", getSpecificUser);
router.get("/searchUsers", searchUsers);
router.get("/admin/appStats", authorizePermissions("admin"), getApplicationStats);

router.patch("/updateUser", validateUpdateUserInput, updateUser);

export default router;
