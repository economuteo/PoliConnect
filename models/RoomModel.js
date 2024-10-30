import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    userIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }],
    roomId: { type: String, required: true },
});

export default mongoose.model("Room", RoomSchema);
