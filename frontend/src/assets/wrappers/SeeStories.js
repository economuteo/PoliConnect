import styled from "styled-components";

const Wrapper = styled.main`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: black;

    .storyFooter {
        padding: 0px 16px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 10vh;
    }

    .currentUserMoreOptions {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        color: white;
        font-size: 0.75em;
        font-family: "Poppins Regular";
    }

    @media only screen and (min-width: 768px) {
        .currentUserMoreOptions {
            font-size: 1em;
        }
    }
`;

export default Wrapper;
