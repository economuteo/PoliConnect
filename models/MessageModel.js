import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
    {
        text: String,
        username: String,
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Message", MessageSchema);
