import { getCurrentUserUsingToken } from "./userController.js";
import { StatusCodes } from "http-status-codes";
import Comment from "../models/CommentModel.js";
import PhotoPost from "../models/PhotoPostModel.js";
import Event from "../models/EventModel.js";
import { NotFoundError, BadRequestError } from "../errors/customErrors.js";

export const addComment = async (req, res) => {
    const currentUser = await getCurrentUserUsingToken(req);

    const { postId, commentContent, postType } = req.body;

    try {
        const comment = new Comment({
            content: commentContent,
            postId: postId,
            postType: postType,
            createdBy: currentUser._id,
        });

        await comment.save();

        // Add the comment to the appropriate post type
        let post;
        if (postType === "PhotoPost") {
            post = await PhotoPost.findById(postId);
        } else if (postType === "Event") {
            post = await Event.findById(postId);
        }

        if (!post) {
            throw new NotFoundError(`${postType} not found`);
        }

        post.comments.push(comment._id);
        await post.save();

        res.status(StatusCodes.CREATED).json(comment);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};

export const removeComment = async (req, res) => {
    const { commentId } = req.body;

    try {
        // Find and delete the comment
        const comment = await Comment.findByIdAndDelete(commentId);
        if (!comment) {
            throw new NotFoundError("Comment not found");
        }

        // Determine the type of post and remove the comment reference
        let post;
        if (comment.postType === "PhotoPost") {
            post = await PhotoPost.findById(comment.postId);
        } else if (comment.postType === "Event") {
            post = await Event.findById(comment.postId);
        }

        if (post) {
            post.comments.pull(commentId);
            await post.save();
        }

        res.status(StatusCodes.OK).json({ msg: "Comment removed successfully" });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};

export const editComment = async (req, res) => {
    const { commentId, newContent } = req.body;

    try {
        const comment = await Comment.findById(commentId);
        if (!comment) {
            throw new NotFoundError("Comment not found");
        }

        comment.content = newContent;
        await comment.save();

        res.status(StatusCodes.OK).json({ msg: "Comment updated successfully", comment });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};

export const getAllCommentsFromAPost = async (req, res) => {
    const { postId, postType } = req.query;

    try {
        const comments = await Comment.find({ postId: postId, postType: postType });
        res.status(StatusCodes.OK).json(comments);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};
