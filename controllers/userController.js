import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Message from "../models/MessageModel.js";

import { verifyJWT } from "../utils/tokenUtils.js";
import { BadRequestError } from "../errors/customErrors.js";

export const getCurrentUserUsingToken = async (req) => {
    const { token } = req.cookies;
    const tokenDecoded = verifyJWT(token);
    const { userId } = tokenDecoded;
    const user = await User.findOne({ _id: userId });
    if (!user) {
        throw new BadRequestError("User not found");
    }
    const userWithoutPassword = user.toJSON();
    return userWithoutPassword;
};

export const getSpecificUser = async (req, res) => {
    const user = await User.findOne({ _id: req.user.userId });
    const userWithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json(userWithoutPassword);
    return userWithoutPassword;
};

export const checkIsCurrentUser = async (req, res) => {
    try {
        console.log("here");

        const currentUser = await getCurrentUserUsingToken(req);

        // 2 options here to find the specific user (by ID or by username)
        let specificUserId = req.body.userId;
        if (!specificUserId) {
            const specificUser = await User.find({ username: req.body.username });
            specificUserId = specificUser[0]._id;
        }

        let isCurrentUser = currentUser._id.toString() === specificUserId.toString();

        res.status(StatusCodes.OK).json({ isCurrentUser });
    } catch (error) {
        console.error("Error checking if current user:", error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal Server Error" });
    }
};

export const getApplicationStats = async (req, res) => {
    const users = await User.countDocuments();
    const jobs = await Message.countDocuments();
    res.status(StatusCodes.OK).json({ users, jobs });
};

export const updateUser = async (req, res) => {
    const obj = { ...req.body };
    delete obj.password;

    const updatedUser = await User.findByIdAndUpdate(req.user.userId, obj);

    res.status(StatusCodes.OK).json({ msg: "User updated" });
};

export const searchUsers = async (req, res) => {
    const { searchTerm } = req.query;

    if (!searchTerm) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Search term is required" });
    }

    const users = await User.find({
        username: { $regex: `^${searchTerm}`, $options: "i" },
    });

    res.status(StatusCodes.OK).json(users);
};
