import { StatusCodes } from "http-status-codes";
import PhotoPost from "../models/PhotoPostModel.js";
import Event from "../models/EventModel.js";
import User from "../models/EventModel.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
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

        console.log("Event added successfully!");

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

export const getAllPostsForAUser = async (req, res) => {
    try {
        const currentUser = await getCurrentUserUsingToken(req);

        if (!currentUser) {
            throw new UnauthenticatedError("Token expired!");
        }

        const usersFollowed = currentUser.following;
        console.log(usersFollowed);

        if (!usersFollowed || usersFollowed.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "No followed users found" });
        }

        const events = await Event.find({
            createdBy: { $in: usersFollowed },
            typeOfPost: "EventPost",
        }).exec();
        const photoPosts = await PhotoPost.find({
            createdBy: { $in: usersFollowed },
            typeOfPost: "PhotoPost",
        }).exec();

        const combinedResults = [...events, ...photoPosts];

        combinedResults.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        if (combinedResults.length === 0) {
            return res
                .status(StatusCodes.NOT_FOUND)
                .json({ error: "No posts or events found for followed users" });
        }

        res.status(StatusCodes.OK).json(combinedResults);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};
