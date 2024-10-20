import User from "../models/UserModel.js";
import Story from "../models/StoryModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError, BadRequestError } from "../errors/customErrors.js";
import { getCurrentUserUsingToken } from "./userController.js";
import cloudinary from "cloudinary";
import { formatImage } from "../middleware/multerMiddleware.js";

export const addStory = async (req, res) => {
    const currentUser = await getCurrentUserUsingToken(req);

    if (!currentUser) {
        throw new NotFoundError("User not found!");
    }

    if (req.file) {
        const file = formatImage(req.file);
        const response = await cloudinary.v2.uploader.upload(file, {
            folder: "users-stories",
        });

        const storyUrl = response.secure_url;

        const newStory = new Story({
            mediaUrl: storyUrl,
            mediaType: "image",
            user: currentUser._id,
        });

        await newStory.save();

        res.status(StatusCodes.OK).json({ msg: "Story added successfully!" });
    } else {
        throw new BadRequestError("No file uploaded");
    }
};

export const deleteStory = async (req, res) => {
    const storyURL = req.body.storyURL;

    const story = await Story.findOneAndDelete({ mediaUrl: storyURL });

    if (!story) {
        throw new NotFoundError("Story not found!");
    }

    res.status(StatusCodes.OK).json({ msg: "Story removed successfully!" });
};

export const getCurrentUserStories = async (req, res) => {
    const currentUser = await getCurrentUserUsingToken(req);

    if (!currentUser) {
        throw new NotFoundError("User not found!");
    }

    const userStories = await Story.find({ user: currentUser._id });

    res.status(StatusCodes.OK).json(userStories);
};

export const getUserStories = async (req, res) => {
    try {
        const userId = req.query.userId;

        const user = await User.findById(userId);

        if (!user) {
            throw new NotFoundError("User not found!");
        }

        const userStories = await Story.find({ user: user._id });

        res.status(StatusCodes.OK).json(userStories);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
};

export const getStoriesOfFollowingUsers = async (req, res) => {
    const currentUser = await getCurrentUserUsingToken(req);
    const currentUserStories = await Story.find({ user: currentUser._id });
    const currentUserStoriesMediaURLs = currentUserStories.map((story) => story.mediaUrl);
    currentUser.storiesMediaURLs = currentUserStoriesMediaURLs;

    const followedUsersIds = currentUser.following;

    const followedUsers = [];

    for (let i = 0; i < followedUsersIds.length; i++) {
        const followedUserId = followedUsersIds[i];

        const followedUserStories = await Story.find({ user: followedUserId }).sort({
            createdAt: -1,
        });

        if (followedUserStories.length !== 0) {
            let followedUser = await User.findById(followedUserId);
            followedUser = followedUser.toObject();
            const followedUserStoriesMediaURLs = followedUserStories.map((story) => story.mediaUrl);
            followedUser.storiesMediaURLs = followedUserStoriesMediaURLs;
            followedUser.mostRecentStoryDate = followedUserStories[0].createdAt; // Store the date of the most recent story
            followedUsers.push(followedUser);
        }
    }

    // Sort followed users by the date of their most recent story in descending order
    followedUsers.sort((a, b) => b.mostRecentStoryDate - a.mostRecentStoryDate);

    res.status(StatusCodes.OK).json({ currentUser, followedUsers });
};
