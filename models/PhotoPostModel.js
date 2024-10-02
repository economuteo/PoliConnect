import mongoose from "mongoose";
import Base from './BaseModel.js'

const photoPostSchema = new mongoose.Schema(
    {
        mediaUrl: {
            type: String,
            required: true,
        },
    },
);

const PhotoPost = Base.discriminator("PhotoPost", photoPostSchema);

export default PhotoPost;
