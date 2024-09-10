import { getCurrentUserUsingToken } from "./userController.js";

import cloudinary from "cloudinary";

export const getStories = async (req, res) => {
    const currentUser = await getCurrentUserUsingToken(req);
};

export const addStory = async (req, res) => {
    const currentUser = await getCurrentUserUsingToken(req);

    if (!currentUser) {
        throw new NotFoundError("User not found!");
    }

    if (!req.file) {
        throw new BadRequestError("No file uploaded");
    }

    const file = formatImage(req.file);

    const response = await cloudinary.v2.uploader.upload(file, {
        folder: "users-stories",
    });

    if (req.file) {
        const file = formatImage(req.file);
        const response = await cloudinary.v2.uploader.upload(file, {
            folder: "users-stories",
        });
        // currentUser.profileImage = response.secure_url;
        // await currentUser.save();
    }
    res.status(200).json({ msg: "Story added successfully!" });
};

export const removeStory = async (req, res) => {
    const currentUser = await getCurrentUserUsingToken(req);
};
