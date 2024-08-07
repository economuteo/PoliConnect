import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError, UnauthorizedError } from "../errors/customErrors.js";
import mongoose from "mongoose";
import Message from "../models/MessageModel.js";
import User from "../models/UserModel.js";

const withValidationErrors = (validateValues) => {
    return [
        validateValues,
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);
                if (errorMessages[0].startsWith("No message")) {
                    throw new NotFoundError(errorMessages);
                }
                if (errorMessages[0].startsWith("You are not authorized")) {
                    throw new UnauthorizedError("You are not authorized to access this route");
                }
                throw new BadRequestError(errorMessages);
            }
            next();
        },
    ];
};

export const validateMessageInput = withValidationErrors([
    body("text").notEmpty().withMessage("Text is required").trim(),
    body("username").notEmpty().withMessage("Username is required").trim(),
]);

export const validateIdParam = withValidationErrors([
    param("id").custom(async (value, { req }) => {
        const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
        if (!isValidMongoId) throw new BadRequestError("Invalid MongoDB id");
        const message = await Message.findById(value);
        if (!message) throw new NotFoundError(`No message with the id of ${value}`);
        const isAdmin = req.user.role === "admin";
        const isOwner = message.createdBy.toString() === req.user.userId;
        if (!isAdmin && !isOwner) {
            throw new UnauthorizedError("You are not authorized to access this route");
        }
    }),
]);

export const validateRegisterInput = withValidationErrors([
    body("fullName").notEmpty().withMessage("Full name is required").trim(),
    body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format")
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (user) throw new BadRequestError("Email already exists");
        })
        .custom((email) => {
            if (!email.endsWith("@stud.fils.upb.ro")) {
                throw new BadRequestError("Email must end with @stud.fils.upb.ro");
            }
            return true;
        })
        .trim(),
    body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long")
        .trim(),
]);

export const validateResetPasswordInput = withValidationErrors([
    body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long")
        .trim(),
]);

export const validateLoginInput = withValidationErrors([
    body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format")
        .trim(),
    body("password").notEmpty().withMessage("Password is required").trim(),
]);

export const validateUpdateUserInput = withValidationErrors([
    body("fullName").notEmpty().withMessage("Full name is required").trim(),
    body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format")
        .custom(async (email, { req }) => {
            const user = await User.findOne({ email });
            if (user && user._id.toString() !== req.user.userId) {
                throw new BadRequestError("Email already exists");
            }
        })
        .custom((email) => {
            if (!email.endsWith("@stud.fils.upb.ro")) {
                throw new BadRequestError("Email must end with @stud.fils.upb.ro");
            }
            return true;
        })
        .trim(),
]);

export const validateEmailInput = withValidationErrors([
    body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Invalid email format")
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (!user) throw new NotFoundError("This email is not registered");
        })
        .custom((email) => {
            if (!email.endsWith("@stud.fils.upb.ro")) {
                throw new BadRequestError("Email must end with @stud.fils.upb.ro");
            }
            return true;
        })
        .trim(),
]);
