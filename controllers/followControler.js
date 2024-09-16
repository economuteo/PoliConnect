import User from "../models/UserModel.js";
import Story from "../models/StoryModel.js";

import { getCurrentUserUsingToken } from "./userController.js";

import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";

export const followUser = async (req, res) => {
    const currentUser = await getCurrentUserUsingToken(req);

    const { followedUserId } = req.body;
    const followedUser = await User.findById(followedUserId);

    if (!followedUser) {
        throw new NotFoundError("User not found!");
    }

    if (currentUser.following.includes(followedUserId)) {
        throw new BadRequestError("You are already following this user!");
    }

    currentUser.following.push(followedUserId);
    await currentUser.save();

    res.status(StatusCodes.OK).json({ msg: "You are now following this user!" });
};

export const unfollowUser = async (req, res) => {
    const currentUser = await getCurrentUserUsingToken(req);

    const { followedUserId } = req.body;
    const followedUser = await User.findById(followedUserId);

    if (!followedUser) {
        throw new NotFoundError("User not found!");
    }

    // Check if the user is actually following the user they want to unfollow
    if (!currentUser.following.includes(followedUserId)) {
        throw new BadRequestError("You are not following this user!");
    }

    // Remove the followedUserId from the currentUser's followedUsers array
    currentUser.following = currentUser.following.filter((id) => id.toString() !== followedUserId);
    await currentUser.save();

    res.status(StatusCodes.OK).json({ msg: "You have unfollowed this user!" });
};

export const isUserFollowed = async (req, res) => {
    const currentUser = await getCurrentUserUsingToken(req);
    const { username } = req.query;

    const userToCheck = await User.findOne({ username });
    const userToCheckId = userToCheck._id;

    const isFollowing = currentUser.following.includes(userToCheckId);

    res.status(StatusCodes.OK).json({ isFollowing });
};
