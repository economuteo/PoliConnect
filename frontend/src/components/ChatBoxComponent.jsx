import Wrapper from "../assets/wrappers/ChatBoxComponent.js";
import React, { useState, useEffect } from "react";
import ChatInput from "./ChatInput.jsx";
import io from "socket.io-client";

// Connect to Socket.IO server
const socket = io("http://localhost:3000");

const ChatBoxComponent = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Listen for incoming messages
        socket.on("receiveMessage", (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off("receiveMessage");
        };
    }, []);

    return (
        <Wrapper className="secondContainer">
            <div className="chat-container">
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message `}>
                            {/* Message Component here */}
                            <span>{msg.content}</span>
                        </div>
                    ))}
                </div>
                <ChatInput />
            </div>
        </Wrapper>
    );
};

export default ChatBoxComponent;
