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
    profileImage: {
        type: String,
        default:
            "https://res.cloudinary.com/diydmnphf/image/upload/v1723297355/user-profile_ny6qgr.png",
    },
});

UserSchema.methods.toJSON = function () {
    let obj = this.toObject();
    delete obj.password;
    return obj;
};

export default mongoose.model("User", UserSchema);
