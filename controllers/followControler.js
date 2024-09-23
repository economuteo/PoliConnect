import User from "../models/UserModel.js";
import Story from "../models/StoryModel.js";

import { getCurrentUserUsingToken } from "./userController.js";

import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";

export const followUser = async (req, res) => {
    const currentUserToken = await getCurrentUserUsingToken(req);
    const currentUser = await User.findById(currentUserToken._id);

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

    if (!followedUser.followers.includes(currentUser._id)) {
        followedUser.followers.push(currentUser._id);
        await followedUser.save();
    }

    res.status(StatusCodes.OK).json({ msg: "You are now following this user!" });
};

export const unfollowUser = async (req, res) => {
    const currentUserToken = await getCurrentUserUsingToken(req);
    const currentUser = await User.findById(currentUserToken._id);

    const { followedUserId } = req.body;

    const followedUser = await User.findById(followedUserId);

    if (!followedUser) {
        throw new NotFoundError("User not found!");
    }

    const isFollowing = currentUser.following.some(
        (id) => id.toString() === followedUserId.toString()
    );

    if (!isFollowing) {
        throw new BadRequestError("You are not following this user!");
    }

    currentUser.following = currentUser.following.filter(
        (id) => id.toString() !== followedUserId.toString()
    );
    await currentUser.save();

    followedUser.followers = followedUser.followers.filter(
        (id) => id.toString() !== currentUser._id.toString()
    );
    await followedUser.save();

    res.status(StatusCodes.OK).json({ msg: "You have unfollowed this user!" });
};

export const isUserFollowed = async (req, res) => {
    const currentUser = await getCurrentUserUsingToken(req);
    const { username } = req.query;

    const userToCheck = await User.findOne({ username });
    const userToCheckId = userToCheck._id.toString();

    const isFollowing = currentUser.following.some((id) => id.toString() === userToCheckId);

    res.status(StatusCodes.OK).json({ isFollowing });
};
