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
    createUsername,
    saveUserPhoto,
} from "../controllers/authController.js";

import {
    validateRegisterInput,
    validateLoginInput,
    validateEmailInput,
    validateResetPasswordInput,
    validateUsername,
} from "../middleware/validationMiddleware.js";

import upload from "../middleware/multerMiddleware.js";

//Initial auth functionality
router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);
router.post("/resetPassword", validateResetPasswordInput, resetPassword);

// Post auth functionality
router.post("/createUsername", validateUsername, createUsername);
router.patch("/savePhoto", upload.single("profileImage"), saveUserPhoto);

// Email functionality
router.post("/checkEmail", validateEmailInput, checkEmail, sendEmail);
router.post("/verifyEmailCode", verifyEmailCode);
router.post("/resendEmailCode", resendEmail, sendEmail);

export default router;
