import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 15px;
    margin-bottom: 10px;

    .chatBox {
        padding-right: 10px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        width: 100%;
        position: relative;
        background-color: #292c35;
        outline: none;
    }

    textarea {
        width: 100%;
        padding: 15px;
        background-color: #292c35;
        border: none;
        border-radius: 10px;
        font-family: "Poppins Regular";
        font-size: 1em;
        color: white;
        outline: none;
        resize: none;
        overflow: hidden;

        &::placeholder {
            color: white;
        }
    }

    textarea:focus {
        outline: none;
    }

    .sendButton {
        cursor: pointer;
    }
`;

export default Wrapper;
