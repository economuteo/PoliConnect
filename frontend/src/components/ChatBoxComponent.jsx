import Wrapper from "../assets/wrappers/ChatBoxComponent.js";
import React, { useState, useEffect, useCallback, useRef } from "react";
import socket from "../socket.io/socket.js"; // Assuming this is where you configure the socket
import customFetch from "../utils/customFetch.js";

const ChatBoxComponent = ({ currentUserId, receiverUserId, currentRoomId }) => {
    const [messages, setMessages] = useState([]);
    const [lastMessageId, setLastMessageId] = useState(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = (behavior = "smooth") => {
        messagesEndRef.current?.scrollIntoView({ behavior });
    };

    useEffect(() => {
        scrollToBottom("smooth");
    }, [messages]);

    // Load more messages from MongoDB when button is clicked
    const loadMoreMessages = useCallback(async () => {
        try {
            const response = await customFetch.post("/messages/getOlderMessages", {
                roomId: currentRoomId,
                lastMessageId,
                limit: 20,
            });
            const olderMessages = await response.json();

            if (olderMessages.length > 0) {
                setMessages((prevMessages) => [...olderMessages, ...prevMessages]);
                setLastMessageId(olderMessages[0]._id);
            }
        } catch (error) {
            console.error("Failed to load more messages:", error);
        }
    }, [currentRoomId, lastMessageId]);

    useEffect(() => {
        // Inserts the most recent 20 messages from Redis or MongoDB (if Redis cache is empty)
        socket.on("preloadMessages", (fetchedMessages) => {
            setMessages(fetchedMessages);
            console.log(fetchedMessages);
            setLastMessageId(fetchedMessages[0]?._id);
        });

        // New message listener for real-time updates
        const handleReceiveMessage = (messageData) => {
            if (messageData.roomId === currentRoomId) {
                setMessages((prevMessages) => [...prevMessages, messageData]);
            }
        };
        socket.on("receiveMessage", handleReceiveMessage);

        return () => {
            socket.off("preloadMessages");
            socket.off("receiveMessage", handleReceiveMessage);
        };
    }, [currentRoomId]);

    return (
        <Wrapper className="secondContainer">
            <div className="chat-container">
                <div className="chatMessages">
                    {messages.length >= 20 && (
                        <button className="loadMessagesButton" onClick={loadMoreMessages}>
                            Load more messages
                        </button>
                    )}
                    {messages.map((msg, index) => (
                        <div className="messageContainer" key={msg._id || index}>
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
                    <div ref={messagesEndRef} />
                </div>
            </div>
        </Wrapper>
    );
};

export default ChatBoxComponent;
