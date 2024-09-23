import { StatusCodes } from "http-status-codes";
import PhotoPost from "../models/PhotoPostModel.js";
import Event from "../models/EventModel.js";
import { NotFoundError, UnauthenticatedError } from "../errors/customErrors.js";
import { getCurrentUserUsingToken } from "./userController.js";
import { formatImage } from "../middleware/multerMiddleware.js";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

export const addEvent = async (req, res) => {
    const { eventName, eventDate, eventTime, eventLocation, eventDescription } = req.body;

    const currentUser = await getCurrentUserUsingToken(req);

    if (!currentUser) {
        throw new UnauthenticatedError("Token expired!");
    }

    const createdBy = currentUser._id;
    const userProfileImage = currentUser.profileImage;
    const userUsername = currentUser.username;

    try {
        const event = new Event({
            eventName,
            eventDate,
            eventTime,
            eventLocation,
            eventDescription,
            createdBy,
            typeOfPost: "EventPost",
            userProfileImage,
            userUsername,
        });

        await event.save();

        res.status(StatusCodes.CREATED).json(event);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};

export const addPhotoPost = async (req, res) => {
    const currentUser = await getCurrentUserUsingToken(req);

    if (!currentUser) {
        throw new UnauthenticatedError("Token expired!");
    }

    try {
        if (req.file) {
            const file = formatImage(req.file);
            const response = await cloudinary.v2.uploader.upload(file, {
                folder: "photo-posts",
            });

            const photoPostUrl = response.secure_url;

            const userId = currentUser._id;
            const userProfileImage = currentUser.profileImage;
            const userUsername = currentUser.username;

            const newPhotoPost = new PhotoPost({
                mediaUrl: photoPostUrl,
                typeOfPost: "PhotoPost",
                createdBy: userId,
                userProfileImage: userProfileImage,
                userUsername: userUsername,
            });

            await newPhotoPost.save();

            res.status(StatusCodes.OK).json({ msg: "Photo post added successfully!" });
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({ error: "No file uploaded" });
        }
    } catch {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
};

export const getFirstPost = async (req, res) => {
    const { userId } = req.params;

    try {
        const post = await Post.findOne({ createdBy: userId }).sort({ createdAt: -1 }).exec();

        if (!post) {
            return res
                .status(StatusCodes.NOT_FOUND)
                .json({ error: "No posts found for this user" });
        }

        res.status(StatusCodes.OK).json(post);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};

export const getSpecificPost = async (req, res, next) => {
    const { postId, typeOfPost } = req.body;

    try {
        let post;

        if (typeOfPost === "EventPost") {
            post = await Event.findById(postId);
        } else if (typeOfPost === "PhotoPost") {
            post = await PhotoPost.findById(postId);
        } else {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Invalid post type" });
        }

        if (!post) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Post not found" });
        }

        req.post = post;
        next();
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};

export const getAllPostsForTheCurrentUser = async (req, res) => {
    try {
        const currentUser = await getCurrentUserUsingToken(req);
        const currentUserObjectId = new mongoose.Types.ObjectId(currentUser._id);

        if (!currentUser) {
            throw new UnauthenticatedError("Token expired!");
        }

        const usersFollowed = currentUser.following;

        const usersToLookFor = [...usersFollowed, currentUserObjectId];

        const events = await Event.find({
            createdBy: { $in: usersToLookFor },
            typeOfPost: "EventPost",
        }).exec();

        const photoPosts = await PhotoPost.find({
            createdBy: { $in: usersToLookFor },
            typeOfPost: "PhotoPost",
        }).exec();

        const combinedResults = [...events, ...photoPosts];

        if (combinedResults.length === 0) {
            throw new NotFoundError("No posts had been made yet!");
        }

        combinedResults.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        res.status(StatusCodes.OK).json(combinedResults);
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
    }
};
