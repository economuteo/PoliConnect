import styled from "styled-components";

const Wrapper = styled.section`
    .title {
        font-size: 2.375em;
        font-family: "Poppins SemiBold";
        font-weight: bold;
        color: #ffff;
    }

    .shortDescription {
        margin-top: 8px;
        font-size: 1em;
        font-family: "Poppins Regular";
        color: #acadb9;
    }

    .emailIcon {
        border-radius: 20px;
        width: 50px;
        height: 50px;
    }

    .emailBox {
        margin-top: 35px;
        padding: 16px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 20px;
        cursor: pointer;
        background-color: #2f2f2f;
    }

    .selected {
        background-color: #0677e8;
    }

    .selected .emailBoxText2 {
        color: white;
    }

    .emailBoxText {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .emailBoxText1 {
        font-size: 1em;
        font-family: "Poppins SemiBold";
        color: #ffff;
    }

    .emailBoxText2 {
        font-family: "Poppins Regular";
        color: #acadb9;
    }

    button {
        width: 100%;
        margin-top: 40px;
        border: none;
        padding: 15px;
        border: none;
        border-radius: 12px;
        color: white;
        transition: background-color 0.5s ease;
    }

    .buttonEnabled {
        background-color: #0677e8;
        cursor: pointer;
        animation: backgroundAnimation 1s forwards;
    }

    @keyframes backgroundAnimation {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 100% 0%;
        }
    }

    /* Responsiveness */

    @media only screen and (min-width: 768px) {
        .title {
            text-align: center;
        }

        .shortDescription {
            text-align: center;
            font-size: 1.25em;
        }
        .emailIcon {
            scale: 1.25;
        }
        .emailBoxText1 {
            font-size: 1.5em;
        }
        .emailBoxText2 {
            font-size: 1.25em;
        }
        button {
            font-size: 1.25em;
        }
    }

    @media only screen and (min-width: 1200px) {
    }
`;

export default Wrapper;
