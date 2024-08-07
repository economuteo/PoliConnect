import { Router } from "express";
const router = Router();

import {
    login,
    register,
    logout,
    checkEmail,
    verifyEmailCode,
    resendEmail,
    sendEmail,
    resetPassword,
} from "../controllers/authController.js";

import {
    validateRegisterInput,
    validateLoginInput,
    validateEmailInput,
    validateResetPasswordInput,
} from "../middleware/validationMiddleware.js";

// Basic functionality
router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);
router.post("/resetPassword", validateResetPasswordInput, resetPassword);

// Email functionality
router.post("/checkEmail", validateEmailInput, checkEmail, sendEmail);
router.post("/verifyEmailCode", verifyEmailCode);
router.post("/resendEmailCode", resendEmail, sendEmail);

export default router;
