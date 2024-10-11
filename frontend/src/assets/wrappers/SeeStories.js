import styled from "styled-components";

const Wrapper = styled.main`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;

    div[style*="display: flex; position: relative; overflow: hidden; align-items: center; width: 100vw; height: 90vh;"] {
        justify-content: center;
    }

    .extraDetails {
        width: 100vw;
        display: flex;
        justify-content: space-between;
        z-index: 2000;
        position: fixed;
        top: 25px;
        padding: 0px 16px;
    }

    .userInformation {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .closeButton {
        position: relative;
        width: 24px;
        height: 24px;
        cursor: pointer;

        &::before,
        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 1.75em;
            height: 2.5px;
            background-color: white;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }

    .userProfileImage {
        width: 24px;
        height: 24px;
        border-radius: 50%;
    }

    .userName {
        color: white;
        font-family: "Poppins Regular";
    }

    .option {
        padding: 0px 10px;
    }

    .storyFooter {
        width: 100%;
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

    .currentUserMoreOptionsHidden {
        opacity: 0;
    }

    #deleteText {
        color: red;
    }

    p {
        text-align: center;
    }

    .modal {
        width: 95%;
        max-width: 500px;
        margin: auto;
        position: fixed;
        bottom: 25px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: black;
        z-index: 100000;
        font-family: "Poppins Regular";
        animation: slideUp 0.3s ease-in-out;
    }

    .modalContent {
        background-color: white;
        border-radius: 5px;
    }

    .option {
        padding: 8px 0px;
    }

    .cancelButton {
        background-color: white;
        border-radius: 5px;
    }

    @media only screen and (min-width: 768px) {
        .currentUserMoreOptions {
            font-size: 1em;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes slideUp {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(0);
        }
    }
`;

export default Wrapper;
