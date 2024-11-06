import styled from "styled-components";

const Wrapper = styled.main`
    flex: 1;

    overflow: scroll;

    /* Hide scrollbars for WebKit browsers (Chrome, Safari) */
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    /* Hide scrollbars for Firefox */
    scrollbar-width: none;

    /* Hide scrollbars for Internet Explorer and Edge */
    -ms-overflow-style: none;

    /* Hide scrollbars for older versions of Edge */
    & {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .normalPage {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .blurred {
        filter: blur(5px);
        pointer-events: none;
    }

    .special {
        margin-top: 15px;
        font-family: "Poppins Medium";
        color: white;
        font-size: 1.6875rem;
    }

    .menuOptions {
        margin-top: 60px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 26px;
    }

    .option {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 26px;
        color: white;
        font-family: "Poppins Regular";
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        width: 80%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px;
        border-radius: 15px;
        text-align: center;
        color: white;
        background-color: black;
        font-family: "Poppins Regular";
        font-size: 1em;
        z-index: 1001; /* Ensure modal content is above the overlay */
    }

    .buttons {
        margin-top: 20px;
        display: flex;
        gap: 20px;
    }

    button {
        padding: 15px;
        border: none;
        border-radius: 12px;
        color: white;
        font-family: "Poppins Regular";
        cursor: pointer;
    }

    #yesButton {
        background-color: red;
    }

    #noButton {
        background-color: #0777e8;
    }
`;

export default Wrapper;
