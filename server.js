import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import morgan from "morgan";
import { nanoid } from "nanoid";

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

let messages = [
    { id: nanoid(), text: "Hello, World!", username: "John Doe" },
    { id: nanoid(), text: "This is a message", username: "Stefanee" },
];

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.post("/", (req, res) => {
    res.json({ message: "data received", data: req.body });
});

// Get messages
app.get("/api/v1/messages", (req, res) => {
    res.json(messages);
});

// Create a new message
app.post("/api/v1/messages", (req, res) => {
    const { text, username } = req.body;
    if (!text) {
        return res.status(400).json({ msg: "Please include the text that is missing..." });
    }
    if (!username) {
        return res.status(400).json({ msg: "Please include the username that is missing..." });
    }
    const message = { id: nanoid(), text, username };
    messages.push(message);
    res.status(201).json(message);
});

// Get a single message
app.get("/api/v1/messages/:id", (req, res) => {
    const { id } = req.params;
    const message = messages.find((message) => message.id === id);
    if (!message) {
        return res.status(404).json({ msg: `No message with the id of ${id}` });
    }
    res.status(200).json(message);
});

// Edit a message
app.patch("/api/v1/messages/:id", (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ msg: "Please include the user that is missing..." });
    }
    const { id } = req.params;
    const message = messages.find((message) => message.id === id);
    if (!message) {
        return res.status(404).json({ msg: `No message with the id of ${id}` });
    }
    message.username = username;
    res.status(200).json({ msg: "vine stefane", message });
});

// Delete a message
app.delete("/api/v1/messages/:id", (req, res) => {
    const { id } = req.params;
    const message = messages.find((message) => message.id === id);
    if (!message) {
        return res.status(404).json({ msg: `No message with the id of ${id}` });
    }
    messages = messages.filter((message) => message.id !== id);
    res.status(200).json({ msg: "This message was deleted", message });
});

// Soon
// app.use("/api/v1/users", authenticateUser, userRouter);
