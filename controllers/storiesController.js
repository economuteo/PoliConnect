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
    const followedUsers = currentUser.following;

    const followedUsersStoriesInfo = [];

    for (let i = 0; i < followedUsers.length; i++) {
        const followedUserId = followedUsers[i];

        const followedUserStories = await Story.find({ user: followedUserId });

        // Checks if the user has stories
        if (followedUserStories.length !== 0) {
            const followedUser = await User.findById(followedUserId);
            const { _id, username, profileImage } = followedUser;
            const followedUserStoriesInfo = {
                _id,
                username,
                profileImage,
                stories: followedUserStories,
            };

            followedUsersStoriesInfo.push(followedUserStoriesInfo);
        }
    }

    res.status(StatusCodes.OK).json({ usersData });
};
