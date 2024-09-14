import mongoose from "mongoose";
import Story from "./StoryModel.js";

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
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});

UserSchema.methods.toJSON = function () {
    let obj = this.toObject();
    delete obj.password;
    return obj;
};

export default mongoose.model("User", UserSchema);
