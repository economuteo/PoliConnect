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
