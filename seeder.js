import User from "./models/UserModel.js";
import Event from "./models/EventModel.js";
import PhotoPost from "./models/PhotoPostModel.js";
import Story from "./models/StoryModel.js";

import users from "./data/users.js";
import { stories } from "./data/stories.js";
import { events, photoPosts } from "./data/posts.js";

import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const importData = async () => {
    try {
        // await User.insertMany(users);

        // Insert PhotoPosts with delay
        for (const photoPost of photoPosts) {
            await PhotoPost.create(photoPost);
            await delay(500);
        }

        // Insert Events with delay
        for (const event of events) {
            await Event.create(event);
            await delay(500);
        }

        // Insert Stories with delay
        for (const story of stories) {
            await Story.create(story);
            await delay(500);
        }

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
        await Story.deleteMany();

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
