import Wrapper from "../assets/wrappers/ChatBoxComponent.js";
import React, { useState, useEffect, useCallback, useRef } from "react";
import socket from "../socket.io/socket.js"; // Assuming this is where you configure the socket
import customFetch from "../utils/customFetch.js";
import ClipLoader from "react-spinners/ClipLoader"; // Import the Clip Loader

const ChatBoxComponent = ({ currentUserId, receiverUserId, currentRoomId }) => {
    const [messages, setMessages] = useState([]);
    const [lastMessageId, setLastMessageId] = useState(null);
    const [loadMoreVisible, setLoadMoreVisible] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [moreMessagesLoading, setMoreMessagesLoading] = useState(false); // Loader state
    const messagesEndRef = useRef(null);

    const scrollToBottom = (behavior = "smooth") => {
        messagesEndRef.current?.scrollIntoView({ behavior });
    };

    useEffect(() => {
        if (!isLoadingMore) {
            scrollToBottom("smooth");
        } else {
            setIsLoadingMore(false);
        }
    }, [messages]);

    const loadMoreMessages = useCallback(async () => {
        try {
            const chatContainer = document.querySelector(".chatMessages");
            // Initial values for scroll position
            const previousScrollHeight = chatContainer.scrollHeight;
            const previousScrollTop = chatContainer.scrollTop;

            setMoreMessagesLoading(true);
            setIsLoadingMore(true);

            const response = await customFetch.post("/messages/getOlderMessages", {
                roomId: currentRoomId,
                lastMessageId,
                limit: 20,
            });

            const olderMessages = response.data;

            if (olderMessages.length === 0) {
                setLoadMoreVisible(false);
                setIsLoadingMore(false);
            }

            if (olderMessages.length > 0) {
                setMessages((prevMessages) => [...olderMessages, ...prevMessages]);
                setLastMessageId(olderMessages[0]._id);

                // Ensure scroll position stays consistent after adding new messages
                setTimeout(() => {
                    chatContainer.scrollTop =
                        previousScrollTop + (chatContainer.scrollHeight - previousScrollHeight);
                }, 0);
            }
        } catch (error) {
            console.error("Failed to load more messages:", error);
        } finally {
            setMoreMessagesLoading(false);
        }
    }, [currentRoomId, lastMessageId]);

    useEffect(() => {
        socket.on("preloadMessages", (fetchedMessages) => {
            setMessages(fetchedMessages);
            setLastMessageId(fetchedMessages[0]?._id);
        });

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
                    {messages?.length >= 20 && loadMoreVisible && (
                        <>
                            {moreMessagesLoading ? (
                                <div className="loaderContainer">
                                    <ClipLoader color="#0677E8" size={35} />
                                </div>
                            ) : (
                                <button className="loadMessagesButton" onClick={loadMoreMessages}>
                                    Load more messages
                                </button>
                            )}
                        </>
                    )}
                    {messages?.map((msg, index) => (
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
