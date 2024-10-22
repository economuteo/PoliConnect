import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { ChatBoxComponent, UserMessageNavbarComponent, ChatInputComponent } from "../components";
import Wrapper from "../assets/wrappers/UserMessagePage";
import customFetch from "../utils/customFetch";
import { useLocation } from "react-router-dom";

const socket = io("http://localhost:3000");

const UserMessagePage = () => {
    const location = useLocation();

    const [currentUserId, setCurrentUserId] = useState("");
    const [receiverUserId, setReceiverUserId] = useState(location.state?.user._id);

    useEffect(() => {
        async function fetchCurrentUser() {
            // Get current user using req.cookies
            const currentUser = await customFetch.get("/users/currentUser");

            // Register the user with the backend
            socket.emit("register", currentUser._id);

            setCurrentUserId(currentUser._id);
        }

        fetchCurrentUser();
    }, []);

    return (
        <Wrapper>
            <UserMessageNavbarComponent />
            <ChatBoxComponent />
            <ChatInputComponent currentUserId={currentUserId} receiverUserId={receiverUserId} />
        </Wrapper>
    );
};

export default UserMessagePage;
