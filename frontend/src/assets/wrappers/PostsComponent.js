import styled from "styled-components";

const Wrapper = styled.main`
    width: 100%;
    flex: 1;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    overflow-y: auto;

    #errorMessage {
        font-family: "Poppins Regular";
        color: white;
    }

    &::-webkit-scrollbar {
        display: none; /* Safari, Chrome, and Edge */
    }

    #noPostsMessage {
        font-family: "Poppins Regular";
        color: white;
        text-align: center;
    }

    #loadingDiv {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #loader {
        width: 1px;
        height: 1px;
    }

    #loadMoreButton {
        padding: 10px 20px;
        margin-bottom: 20px;
        border: none;
        border-radius: 5px;
        font-family: "Poppins Regular";
        background-color: #2f80ed;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s;
    }
`;

export default Wrapper;
