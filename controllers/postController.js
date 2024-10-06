import { StatusCodes } from "http-status-codes";

import PhotoPost from "../models/PhotoPostModel.js";
import Event from "../models/EventModel.js";
import Base from "../models/BaseModel.js";

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
            console.log(req.body);

            const file = formatImage(req.file);
            const response = await cloudinary.v2.uploader.upload(file, {
                folder: "photo-posts",
            });

            const photoPostUrl = response.secure_url;

            const userId = currentUser._id;
            const userProfileImage = currentUser.profileImage;
            const userUsername = currentUser.username;

            const description = req.body.description;

            const newPhotoPost = new PhotoPost({
                mediaUrl: photoPostUrl,
                typeOfPost: "PhotoPost",
                createdBy: userId,
                userProfileImage: userProfileImage,
                userUsername: userUsername,
                description: description,
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

export const getFirstPostForTheCurrentUser = async (req, res) => {
    try {
        const currentUser = await getCurrentUserUsingToken(req);
        const currentUserObjectId = new mongoose.Types.ObjectId(currentUser._id);

        if (!currentUser) {
            throw new UnauthenticatedError("Token expired!");
        }

        const usersFollowed = currentUser.following;
        const usersToLookFor = [...usersFollowed, currentUserObjectId];

        const firstPost = await Base.findOne({
            createdBy: { $in: usersToLookFor },
        })
            .sort({ createdAt: -1 })
            .exec();

        if (!firstPost) {
            throw new NotFoundError("No posts had been made yet!");
        }

        res.status(StatusCodes.OK).json(firstPost);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};

export const getNoOfPostsForTheCurrentUser = async (req, res) => {
    try {
        const currentUser = await getCurrentUserUsingToken(req);
        const currentUserObjectId = new mongoose.Types.ObjectId(currentUser._id);

        if (!currentUser) {
            throw new UnauthenticatedError("Token expired!");
        }

        const usersFollowed = currentUser.following;
        const usersToLookFor = [...usersFollowed, currentUserObjectId];

        // Get pagination parameters from query, default to page 1 and limit 5
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const skip = (page - 1) * limit + 1;

        let posts = await Base.find({
            createdBy: { $in: usersToLookFor },
        })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        let postsV2 = await Base.find({
            createdBy: { $in: usersToLookFor },
        });

        const postsLength = postsV2.length - 1;

        res.status(StatusCodes.OK).json({ posts, postsLength });
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
    }
};
