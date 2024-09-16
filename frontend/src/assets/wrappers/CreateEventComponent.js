import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .eventInner {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        font-size: 1.25em;
        margin-bottom: 20px;
        text-align: center;
        font-family: "Poppins Bold";
        color: white;
    }

    form {
        width: 100%;
        max-width: 700px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .field {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    label {
        font-size: 1em;
        font-family: "Poppins SemiBold";
        color: white;
    }

    input,
    button {
        font-size: 1em;
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 8px;
        background-color: #292c35;
        color: #c2c3cb;
    }

    textarea {
        border: none;
        padding: 10px;
        height: 80px;
        border-radius: 8px;
        background-color: #292c35;
        color: #c2c3cb;
    }

    button {
        margin-top: 10px;
        font-family: "Poppins Regular";
        background-color: #0677e8;
        color: white;
    }

    /* Custom colors for date and time adapted for all browsers  */
    input[type="date"]::-webkit-calendar-picker-indicator,
    input[type="time"]::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }

    input[type="date"]::-webkit-input-placeholder,
    input[type="time"]::-webkit-input-placeholder {
        color: white;
    }

    input[type="date"]::-moz-placeholder,
    input[type="time"]::-moz-placeholder {
        color: white;
    }

    input[type="date"]:-ms-input-placeholder,
    input[type="time"]:-ms-input-placeholder {
        color: white;
    }

    input[type="date"]:-moz-placeholder,
    input[type="time"]:-moz-placeholder {
        color: white;
    }

    @media only screen and (min-width: 600px) {
        .title {
            font-size: 1.25em;
        }

        label {
            font-size: 1.25em;
        }

        input,
        textarea {
            font-size: 1.25em;
        }
    }
`;

export default Wrapper;
