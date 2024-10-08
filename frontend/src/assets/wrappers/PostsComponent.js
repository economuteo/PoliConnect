import styled from "styled-components";

const Wrapper = styled.main`
    flex: 1;
    align-self: center;
    display: flex;
    flex-direction: column;
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
`;

export default Wrapper;
