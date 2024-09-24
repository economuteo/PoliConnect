import User from "../models/UserModel.js";

import { getCurrentUserUsingToken } from "./userController.js";

import { sendVerificationEmail } from "../services/emailService.js";
import { generateVerificationCode } from "../utils/verificationCodeUtils.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { createJWT, verifyJWT } from "../utils/tokenUtils.js";

import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError, UnauthenticatedError } from "../errors/customErrors.js";

import cloudinary from "cloudinary";

import { formatImage } from "../middleware/multerMiddleware.js";

export const registerRequest = async (req, res, next) => {
    const { email, fullName } = req.body;
    let { password } = req.body;

    const hashedPassword = await hashPassword(password);
    password = hashedPassword;

    const token = createJWT({ email: email, fullName: fullName, password: password });

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("registerRequestToken", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === "production",
    });

    next();
};

export const registerFinal = async (req, res) => {
    const { registerRequestToken } = req.cookies;

    if (!registerRequestToken) {
        throw new BadRequestError("The token has expired! Please request a new one.");
    }

    const decodedToken = verifyJWT(registerRequestToken);

    const { email, fullName, password } = decodedToken;

    const isFirstAccount = (await User.countDocuments({})) === 0;
    const role = isFirstAccount ? "admin" : "user";

    const user = await User.create({ email, fullName, password, role });

    const token = createJWT({ userId: user._id, role: user.role });

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        secure: process.env.NODE_ENV === "production",
    });

    res.status(StatusCodes.CREATED).json({ msg: "User created successfully" });
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

export const sendEmail = async (req, res, next) => {
    const { email } = req.body;

    const verificationCode = generateVerificationCode();

    sendVerificationEmail(email, verificationCode);

    const fiveMinutes = 1000 * 60 * 5;
    const oneDay = 1000 * 60 * 60 * 24;

    const token = createJWT({ verificationCode: verificationCode });

    res.cookie("verificationCodeToken", token, {
        httpOnly: true,
        expires: new Date(Date.now() + fiveMinutes),
    });

    res.cookie("email", email, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
    });

    res.status(StatusCodes.OK).json({
        msg: "Verification code was sent to the designated email address!",
        verificationCode: verificationCode,
    });
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

export const verifyEmailCode = async (req, res) => {
    const { verificationCodeToken } = req.cookies;

    if (!verificationCodeToken) {
        throw new BadRequestError("The code has expired! We can send you another one if you wish.");
    }

    const decodedToken = verifyJWT(verificationCodeToken);
    const { verificationCode } = decodedToken;

    const { myCode } = req.body;

    if (verificationCode === myCode) {
        res.status(StatusCodes.OK).json({ msg: "The code entered is correct!" });
    } else {
        throw new UnauthenticatedError("The code entered is incorrect!");
    }
};

export const createUsername = async (req, res) => {
    const { username, university, profile, year } = req.body;
    console.log(req.body);

    const user = await getCurrentUserUsingToken(req);
    const currentUser = await User.findById(user._id);

    if (!user) {
        throw new NotFoundError("User not found!");
    }

    currentUser.username = username;
    currentUser.university = university;
    currentUser.profile = profile;
    currentUser.year = year;
    await currentUser.save();

    res.status(200).json({ message: "Username created successfully" });
};

export const saveUserPhoto = async (req, res) => {
    const user = await getCurrentUserUsingToken(req);
    const currentUser = await User.findById(user._id);

    if (!currentUser) {
        throw new NotFoundError("User not found!");
    }

    if (req.file) {
        const file = formatImage(req.file);
        const response = await cloudinary.v2.uploader.upload(file, {
            folder: "users-profile-photos",
        });
        currentUser.profileImage = response.secure_url;
        await currentUser.save();
    } else {
        currentUser.profileImage =
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png";
        await currentUser.save();
    }

    res.status(StatusCodes.OK).json({ msg: "update user" });
};
