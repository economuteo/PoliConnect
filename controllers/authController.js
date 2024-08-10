import User from "../models/UserModel.js";

import { getCurrentUserUsingToken } from "./userController.js";

import { sendVerificationEmail } from "../services/emailService.js";
import { generateVerificationCode } from "../utils/verificationCodeUtils.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";

import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError, UnauthenticatedError } from "../errors/customErrors.js";

import cloudinary from "cloudinary";
import { formatImage } from "../middleware/multerMiddleware.js";

export const register = async (req, res) => {
    const isFirstAccount = (await User.countDocuments({})) === 0;
    req.body.role = isFirstAccount ? "admin" : "user";

    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    const user = await User.create(req.body);

    const token = createJWT({ userId: user._id, role: user.role });

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === "production",
    });

    res.status(StatusCodes.CREATED).json({ msg: "User created" });
};

export const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    const isValidUser = user && (await comparePassword(req.body.password, user.password));

    if (!isValidUser) throw new UnauthenticatedError("Invalid credentials");

    const token = createJWT({ userId: user._id, role: user.role });

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === "production",
    });

    res.status(StatusCodes.OK).json({ msg: "user logged in" });
};

export const logout = async (req, res) => {
    res.cookie("token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now()),
    });

    res.status(StatusCodes.OK).json({ msg: "User logged out !" });
};

export const resetPassword = async (req, res) => {
    const { email } = req.cookies;

    if (!email) {
        throw new BadRequestError(
            "No email found in cookies. Please request a password reset first."
        );
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new NotFoundError("User not found.");
    }

    const password = req.body.password;

    const newHashedPassword = await hashPassword(password);

    user.password = newHashedPassword;
    await user.save();

    res.status(StatusCodes.OK).json({ msg: "Password was reset successfully!" });
};

export const checkEmail = async (req, res, next) => {
    const { email } = req.body;
    if (email) {
        return next();
    } else {
        throw new BadRequestError("Please provide an email address");
    }
};

export const resendEmail = async (req, res, next) => {
    const { email } = req.cookies;

    if (email) {
        req.body.email = email;
        return next();
    } else {
        throw new BadRequestError("Please provide an email address");
    }
};

export const sendEmail = async (req, res, next) => {
    const { email } = req.body;

    const verificationCode = generateVerificationCode();

    sendVerificationEmail(email, verificationCode);

    const fiveMinutes = 1000 * 60 * 5;
    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("verificationCode", verificationCode, {
        httpOnly: true,
        expires: new Date(Date.now() + fiveMinutes),
    });

    res.cookie("email", email, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
    });

    res.status(StatusCodes.OK).json({
        msg: "Email associated with an account",
        verificationCode: verificationCode,
    });
};

export const verifyEmailCode = async (req, res) => {
    const { verificationCode } = req.cookies;

    if (!verificationCode) {
        throw new BadRequestError("The code has expired! We can send you another one if you wish.");
    }

    const { myCode } = req.body;

    if (verificationCode === myCode) {
        res.status(StatusCodes.OK).json({ msg: "The code entered is correct!" });
    } else {
        throw new UnauthenticatedError("The code entered is incorrect!");
    }
};

export const createUsername = async (req, res) => {
    const { username } = req.body;

    const user = await getCurrentUserUsingToken(req);

    if (!user) {
        throw new NotFoundError("User not found!");
    }

    user.username = username;
    await user.save();

    res.status(200).json({ message: "Username created successfully" });
};

export const saveUserPhoto = async (req, res) => {
    const currentUser = await getCurrentUserUsingToken(req);

    if (!currentUser) {
        throw new BadRequestError("Current user not found");
    }

    if (req.file) {
        const file = formatImage(req.file);
        const response = await cloudinary.v2.uploader.upload(file, {
            folder: "users-profile-photos",
        });
        currentUser.profileImage = response.secure_url;
        await currentUser.save();
    }

    res.status(StatusCodes.OK).json({ msg: "update user" });
};
