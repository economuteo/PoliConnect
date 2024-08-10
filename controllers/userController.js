import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Message from "../models/MessageModel.js";

import { verifyJWT } from "../utils/tokenUtils.js";

export const getCurrentUser = async (req, res) => {
    const user = await User.findOne({ _id: req.user.userId });
    const userWithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json({ user: userWithoutPassword });
    return userWithoutPassword;
};

export const getCurrentUserUsingToken = async (req) => {
    const { token } = req.cookies;
    const tokenDecoded = verifyJWT(token);
    const { userId } = tokenDecoded;
    const user = await User.findOne({ _id: userId });
    return user;
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
