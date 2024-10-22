import { useRef, useState } from "react";
import io from "socket.io-client";
import Wrapper from "../assets/wrappers/ChatInputWrapper.js";

// Connect to Socket.IO server
const socket = io("http://localhost:3000");

const ChatInputComponent = ({ currentUserId, receiverUserId }) => {
    const [message, setMessage] = useState("");
    const textareaRef = useRef(null);

    const handleInput = (e) => {
        setMessage(e.target.value);

        // Reset the height to recalculate size
        textareaRef.current.style.height = "auto";
        // Adjust the height to fit the content
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    };

    const sendMessage = () => {
        if (!message.trim() === "") return;

        // Emit the message to the backend
        socket.emit("sendMessage", {
            senderId: currentUserId,
            receiverId: receiverUserId,
            content: message,
        });

        // Clear the input field
        setMessage("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <Wrapper className="chat-input">
            <div className="chatBox">
                <textarea
                    ref={textareaRef}
                    value={message}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    rows="1"
                    className="chat-textarea"
                    placeholder="Write now..."
                />
                <svg
                    onClick={sendMessage}
                    className="sendButton"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.678 10.0551L0.886026 0.0710987C0.79422 0.0213129 0.691009 -0.00364767 0.586599 -0.00131514C0.482189 0.00101738 0.380196 0.0305623 0.290705 0.0843982C0.201215 0.138234 0.127326 0.214496 0.076345 0.305644C0.0253642 0.396791 -0.000942586 0.499667 2.5801e-05 0.604099V8.1441C-0.00103894 8.29151 0.0521984 8.43415 0.149582 8.54481C0.246966 8.65547 0.38168 8.72641 0.528026 8.7441L15.558 10.6231L0.553026 11.8721C0.402178 11.884 0.261378 11.9524 0.158831 12.0636C0.0562834 12.1749 -0.000439093 12.3208 2.5801e-05 12.4721V19.3961C-0.000786787 19.4979 0.0243156 19.5982 0.0729707 19.6877C0.121626 19.7771 0.192233 19.8526 0.278148 19.9073C0.364064 19.9619 0.462461 19.9937 0.56408 19.9998C0.665699 20.0059 0.767199 19.986 0.859026 19.9421L19.652 11.1331C19.7542 11.0862 19.8411 11.0116 19.9029 10.9178C19.9647 10.8239 19.999 10.7146 20.0017 10.6022C20.0044 10.4899 19.9755 10.379 19.9183 10.2823C19.861 10.1855 19.7778 10.1068 19.678 10.0551Z"
                        fill="#0C88EF"
                    />
                </svg>
            </div>
        </Wrapper>
    );
};

export default ChatInputComponent;
