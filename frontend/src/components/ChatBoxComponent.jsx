import Wrapper from "../assets/wrappers/ChatBoxComponent.js";
import React, { useState, useEffect } from "react";
import { startChat } from "../socket.io/chatHandler.js";
import socket from "../socket.io/socket.js"; // Assuming this is where you configure the socket

const ChatBoxComponent = ({ currentUserId, receiverUserId, currentRoomId }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (currentUserId && receiverUserId) {
            startChat(currentUserId, receiverUserId);
        }
    }, [currentUserId, receiverUserId]);

    useEffect(() => {
        // Listen for incoming messages
        const handleReceiveMessage = (messageData) => {
            if (messageData.roomId === currentRoomId) {
                setMessages((prevMessages) => [...prevMessages, messageData]);
            }
        };

        socket.on("receiveMessage", handleReceiveMessage);

        return () => {
            socket.off("receiveMessage", handleReceiveMessage);
        };
    }, [currentRoomId]);

    return (
        <Wrapper className="secondContainer">
            <div className="chat-container">
                <div className="chatMessages">
                    {messages.map((msg, index) => (
                        <div className="messageContainer" key={index}>
                            <span
                                className={`message ${
                                    msg.senderId === currentUserId
                                        ? "currentUserMsg"
                                        : "otherUserMsg"
                                }`}>
                                <span>{msg.content}</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
};

export default ChatBoxComponent;
