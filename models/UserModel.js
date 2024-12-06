import mongoose from "mongoose";

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
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1723297355/user-profile_ny6qgr.png",
    },
    bannerImage: {
        type: String,
        default:
            "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1726415614/default-banner.png",
    },
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    demoExpiresAt: {
        type: Date,
    },
});

UserSchema.index({ demoExpiresAt: 1 }, { expireAfterSeconds: 0 });

UserSchema.methods.toJSON = function () {
    let obj = this.toObject();
    delete obj.password;
    return obj;
};

export default mongoose.model("User", UserSchema);
