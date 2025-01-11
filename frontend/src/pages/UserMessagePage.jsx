import { useEffect, useState } from "react";
import { ChatBoxComponent, UserMessageNavbarComponent, ChatInputComponent } from "../components";
import Wrapper from "../assets/wrappers/UserMessagePage";
import customFetch from "../utils/customFetch";
import { useLocation } from "react-router-dom";
import { startChat } from "../socket.io/chatHandler";
import socket from "../socket.io/socket";

const UserMessagePage = () => {
    const location = useLocation();
    const [currentUserId, setCurrentUserId] = useState("");
    const [receiverUserId, setReceiverUserId] = useState(location.state?.user._id);
    const [currentRoomId, setCurrentRoomId] = useState("");
    const [chatStarted, setChatStarted] = useState(false);

    useEffect(() => {
        const fetchCurrentUserAndRoomId = async () => {
            // Get current user using req.cookies
            const response = await customFetch.get("/users/currentUserResponse");
            const userId = response.data._id;
            setCurrentUserId(userId);

            // Fetch room ID after getting the current user ID
            const roomResponse = await customFetch.post("/rooms/getCurrentRoomId", {
                currentUserId: userId,
                receiverUserId,
            });
            setCurrentRoomId(roomResponse.data.roomId);
        };

        fetchCurrentUserAndRoomId();
    }, [receiverUserId]);

    useEffect(() => {
        if (currentUserId && receiverUserId) {
            startChat(currentUserId, receiverUserId);
            setChatStarted(true);
        }
    }, [currentUserId, receiverUserId]);

    return (
        <Wrapper>
            <UserMessageNavbarComponent />
            {chatStarted ? (
                <>
                    <ChatBoxComponent
                        currentRoomId={currentRoomId}
                        currentUserId={currentUserId}
                        receiverUserId={receiverUserId}
                    />
                    <ChatInputComponent
                        currentUserId={currentUserId}
                        receiverUserId={receiverUserId}
                        currentRoomId={currentRoomId}
                    />
                </>
            ) : (
                <div className="connectingMessage">Connecting to the chat...</div>
            )}
        </Wrapper>
    );
};

export default UserMessagePage;
