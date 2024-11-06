import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;

    .chat-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .chatMessages {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        overflow-y: auto;
        max-height: calc(100vh - 250px);
    }

    /* WebKit browsers (Chrome, Safari) */
    .chatMessages::-webkit-scrollbar {
        display: none; /* Hide the scrollbar */
    }

    /* Firefox */
    .chatMessages {
        scrollbar-width: none; /* Hide the scrollbar */
    }

    .message {
        padding: 10px;
        border-radius: 10px;
        max-width: 60%;
        font-family: "Poppins Regular";
        word-wrap: break-word;
        word-break: break-word;
        white-space: pre-wrap;
    }

    .messageContainer {
        display: grid;
        width: 100%;
    }

    .loadMessagesButton {
        align-self: center;
        width: 200px;
        padding: 10px;
        border-radius: 10px;
        background-color: #0a6c9f;
        color: white;
        border: none;
        cursor: pointer;
        font-family: "Poppins Regular";
    }

    .currentUserMsg {
        justify-self: flex-end;
        background-color: #2f6c9f;
        color: white;
    }

    .otherUserMsg {
        justify-self: flex-start;
        background-color: #292c35;
        color: white;
    }
`;

export default Wrapper;
