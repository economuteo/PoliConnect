import Wrapper from "../assets/wrappers/ChatBoxComponent.js";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { startChat } from "../socket.io/chatHandler.js";
import socket from "../socket.io/socket.js"; // Assuming this is where you configure the socket

const ChatBoxComponent = ({ currentUserId, receiverUserId, currentRoomId }) => {
    const [messages, setMessages] = useState([]);
    const [preloadedMessages, setPreloadedMessages] = useState([]);
    const [lastMessageId, setLastMessageId] = useState(null);
    const [isFetching, setIsFetching] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = (behavior = "smooth") => {
        messagesEndRef.current?.scrollIntoView({ behavior });
    };

    useEffect(() => {
        // Receive the preloaded messages and set them in state
        socket.on("preloadMessages", (fetchedMessages) => {
            setMessages(fetchedMessages);
            setLastMessageId(fetchedMessages[0]?._id);
            setTimeout(() => scrollToBottom("auto"), 100);
        });

        const handleReceiveMessage = (messageData) => {
            if (messageData.roomId === currentRoomId) {
                setMessages((prevMessages) => [...prevMessages, messageData]);
                scrollToBottom("smooth");
            }
        };
        socket.on("receiveMessage", handleReceiveMessage);

        // Load more messages in the background when requested
        socket.on("backgroundMessages", (olderMessages) => {
            setPreloadedMessages((prev) => [...olderMessages, ...prev]);
            setLastMessageId(olderMessages[0]?._id); // Update the lastMessageId for the next fetch
            setIsFetching(false); // Reset fetching state
        });

        return () => {
            socket.off("preloadMessages");
            socket.off("receiveMessage", handleReceiveMessage);
            socket.off("backgroundMessages");
        };
    }, [currentRoomId]);

    const fetchOlderMessages = useCallback(() => {
        if (!isFetching && lastMessageId) {
            setIsFetching(true);
            socket.emit("loadMoreMessages", { roomId: currentRoomId, lastMessageId });
        }
    }, [currentRoomId, lastMessageId, isFetching]);

    // Load next preloaded batch when the user scrolls to the top
    const handleScrollToTop = useCallback(() => {
        if (preloadedMessages.length > 0) {
            setMessages((prevMessages) => [...preloadedMessages, ...prevMessages]);
            setPreloadedMessages([]);
            fetchOlderMessages();
        }
    }, [preloadedMessages, fetchOlderMessages]);

    // Trigger handleScrollToTop when the user scrolls to the top of the message list
    useEffect(() => {
        const chatContainer = document.querySelector(".chat-container");

        const onScroll = () => {
            if (chatContainer.scrollTop === 0) {
                handleScrollToTop();
            }
        };

        chatContainer.addEventListener("scroll", onScroll);

        return () => {
            chatContainer.removeEventListener("scroll", onScroll);
        };
    }, [handleScrollToTop]);

    // Start initial background fetch of older messages
    useEffect(() => {
        if (lastMessageId) {
            fetchOlderMessages(); // Load the first background batch immediately after the initial load
        }
    }, [lastMessageId, fetchOlderMessages]);

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
                    <div ref={messagesEndRef} />
                </div>
            </div>
        </Wrapper>
    );
};

export default ChatBoxComponent;
