import { NotFoundError, BadRequestError } from "../errors/customErrors.js";
import { getCurrentUserUsingToken } from "./userController.js";
import { StatusCodes } from "http-status-codes";
import PhotoPost from "../models/PhotoPostModel.js";
import Event from "../models/EventModel.js";

export const likePost = async (req, res) => {
    try {
        const currentUser = await getCurrentUserUsingToken(req);

        const post = req.post;

        if (!post.likes.includes(currentUser._id)) {
            post.likes.push(currentUser._id);
            await post.save();
        }

        res.status(StatusCodes.OK).json({ message: "Post liked successfully", post });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};

export const unlikePost = async (req, res) => {
    try {
        const currentUser = await getCurrentUserUsingToken(req);

        const post = req.post;

        const likeIndex = post.likes.indexOf(currentUser._id);
        if (likeIndex !== -1) {
            post.likes.splice(likeIndex, 1);
            await post.save();
        }

        res.status(StatusCodes.OK).json({ message: "Post unliked successfully", post });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};
