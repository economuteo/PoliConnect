import mongoose from "mongoose";
import StorySchema from "./StoryModel.js";

const UserSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    username: {
        type: String,
        default: "username",
    },
    profileImage: {
        type: String,
        default:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    stories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Story",
        },
    ],
});

UserSchema.methods.toJSON = function () {
    let obj = this.toObject();
    delete obj.password;
    return obj;
};

export default mongoose.model("User", UserSchema);
