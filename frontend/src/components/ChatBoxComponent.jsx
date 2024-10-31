import Wrapper from "../assets/wrappers/ChatBoxComponent.js";
import React, { useState, useEffect } from "react";
import { startChat } from "../socket.io/chatHandler.js";
import socket from "../socket.io/socket.js"; // Assuming this is where you configure the socket

const ChatBoxComponent = ({ currentUserId, receiverUserId, currentRoomId }) => {
    const [messages, setMessages] = useState([]);
    const [connectionStatus, setConnectionStatus] = useState("connecting"); // Start with "connecting"

    useEffect(() => {
        // Listen for incoming messages
        const handleReceiveMessage = (messageData) => {
            if (messageData.roomId === currentRoomId) {
                setMessages((prevMessages) => [...prevMessages, messageData]);
            }
        };

        socket.on("connect", () => setConnectionStatus("connected"));
        socket.on("disconnect", () => setConnectionStatus("disconnected"));
        socket.on("reconnect_attempt", () => setConnectionStatus("reconnecting"));
        socket.on("reconnect_failed", () => setConnectionStatus("offline")); // When reconnection fails

        socket.on("receiveMessage", handleReceiveMessage);

        return () => {
            socket.off("receiveMessage", handleReceiveMessage);
            socket.off("connect");
            socket.off("disconnect");
            socket.off("reconnect_attempt");
            socket.off("reconnect_failed");
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
