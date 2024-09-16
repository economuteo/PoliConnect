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
    university: {
        type: String,
    },
    profile: {
        type: String,
    },
    year: {
        type: String,
    },
    profileImage: {
        type: String,
        default:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
    bannerImage: {
        type: String,
        default:
            "https://console.cloudinary.com/pm/c-fe1b4f0d8aba638b61152d48e20896/media-explorer?assetId=74e4e7989d30741fbb2999620e748826",
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
