import styled from "styled-components";

const Wrapper = styled.section`
    width: 100%;
    max-width: 600px;
    padding: 40px 20px 60px 20px;
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #141416;

    .title {
        text-align: center;
        font-size: 1.25em;
        font-family: "Poppins SemiBold";
        color: #f9f9ff;
    }

    .shortDesc {
        text-align: center;
        font-size: 0.875em;
        font-family: "Poppins Regular";
        color: #acadb9;
    }

    .phoneNum {
        text-align: center;
        font-size: 1em;
        font-family: "Poppins SemiBold";
        color: #acadb9;
    }

    .react-code-input {
        margin-top: 30px;
        width: 100% !important;
        display: flex !important;
        justify-content: space-around !important ;
    }

    .react-code-input input {
        box-sizing: border-box !important;
        padding: 0px !important;
        border: 2px solid #c2c3cb !important;
        text-align: center !important;
        font-family: "Poppins Light";
        color: #ffffff !important;
        background-color: #141416 !important;
    }

    /* Remove spin buttons in WebKit browsers (Chrome, Safari) */
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Remove spin buttons in Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }

    .buttonsPart {
        width: 100%;
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 12px;
        font-family: "Poppins Medium";
    }

    .buttons {
        padding: 20px 0px;
        border: none;
        border-radius: 15px;
        font-size: 1em;
        font-family: "Poppins SemiBold";
        cursor: pointer;
        &:hover {
            opacity: 0.9;
            scale: 1.03;
        }
    }

    .verify {
        background-color: #0677e8;
        color: #f3f5f6;
    }

    .send {
        background-color: #292c35;
        color: #c2c3cb;
    }

    .timer {
        width: 100%;
        text-align: left;
        margin-top: 10px;
        font-size: 1.25em;
        font-family: "Poppins Medium";
        color: #acadb9;
    }

    /* Responsiveness */
    @media only screen and (min-width: 320px) {
        .title {
            font-size: clamp(1.375rem, 0.9286rem + 2.2321vw, 2rem);
        }
        .shortDesc {
            font-size: 1.25em;
        }
    }

    @media only screen and (min-width: 768px) {
        .title {
            font-size: 2em;
        }
        .shortDesc {
            font-size: 1.25em;
        }
    }
    @media only screen and (min-width: 768px) {
        .react-code-input input {
            scale: 1.375;
        }

        .title {
            font-size: 2em;
        }

        .shortDesc {
            font-size: 1.25em;
        }

        .phoneNum {
            font-size: 1.25em;
        }
    }

    @media only screen and (min-width: 1200px) {
        .react-code-input input {
            scale: 1.5;
        }

        .title {
            font-size: 2.375em;
        }

        .shortDesc {
            font-size: 1.25em;
        }

        .phoneNum {
            font-size: 1.375em;
        }
    }
`;

export default Wrapper;
