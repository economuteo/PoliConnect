import User from "./models/UserModel.js";
import Event from "./models/EventModel.js";
import PhotoPost from "./models/PhotoPostModel.js";

import users from "./data/users.js";
import { events, photoPosts } from "./data/posts/posts.js";

import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
    try {
        // await User.insertMany(users);
        await PhotoPost.insertMany(photoPosts);
        await Event.insertMany(events);

        console.log("Data Imported!".green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        // await User.deleteMany();
        await PhotoPost.deleteMany();
        await Event.deleteMany();

        console.log("Data Destroyed!".red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}
