import { StatusCodes } from "http-status-codes";
import PhotoPost from "../models/PhotoPostModel.js";
import Event from "../models/EventModel.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
import { getCurrentUserUsingToken } from "./userController.js";
import { formatImage } from "../middleware/multerMiddleware.js";
import cloudinary from "cloudinary";

export const addEvent = async (req, res) => {
    const { eventName, eventDate, eventTime, eventLocation, eventDescription, createdBy } =
        req.body;

    try {
        const event = new Event({
            eventName,
            eventDate,
            eventTime,
            eventLocation,
            eventDescription,
            createdBy,
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

    if (req.file) {
        const file = formatImage(req.file);
        const response = await cloudinary.v2.uploader.upload(file, {
            folder: "photo-posts",
        });

        const photoPostUrl = response.secure_url;

        const newPhotoPost = new PhotoPost({
            mediaUrl: photoPostUrl,
            createdBy: currentUser._id,
        });

        await newPhotoPost.save();

        res.status(StatusCodes.OK).json({ msg: "Photo post added successfully!" });
    } else {
        throw new BadRequestError("No file uploaded");
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
