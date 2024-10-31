import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
    {
        senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        content: { type: String, required: true },
        iv: { type: String, required: true },
        roomId: { type: String, required: true },
        delivered: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.model("Message", MessageSchema);
