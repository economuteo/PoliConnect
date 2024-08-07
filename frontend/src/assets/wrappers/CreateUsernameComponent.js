import styled from "styled-components";

const Wrapper = styled.main`
    max-width: 400px;

    .title {
        text-align: center;
        line-height: 125%;
        font-family: "Poppins SemiBold";
        font-size: 2.375rem;
        color: white;
    }

    .shortDescription {
        text-align: center;
        margin-top: 8px;
        font-size: 0.875em;
        font-family: "Poppins Regular";
        color: #acadb9;
    }

    input {
        width: 100%;
        padding: 20px;
        border: none;
        border-radius: 12px;
        background-color: #292c35;
        color: #c2c3cb;
        &::placeholder {
            color: #c2c3cb;
        }
    }

    button {
        width: 100%;
        margin-top: 10px;
        border: none;
        padding: 15px;
        border: none;
        border-radius: 12px;
        color: white;
        background-color: #0677e8;
        cursor: pointer;

        &:hover {
            background-color: #0660f8; /* Change background color on hover */
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Add box shadow on hover */
        }
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 2rem;
    }

    .parent {
        position: relative;
    }

    .button {
        display: flex;
        flex-direction: column;
    }

    a {
        text-decoration: none;
        color: #ffff;
    }

    /* Responsiveness */
    @media only screen and (min-width: 768px) {
        .shortDescription {
            text-align: center;
        }

        button {
            padding: 20px;
            width: 50%;
        }

        .buttons {
            display: flex;
            flex-direction: row;
            gap: 20px;
        }

        .emailNextButton {
            width: 100%;
        }

        .title {
            text-align: center;
            font-size: 2.75rem;
        }

        input {
            font-size: 1.25rem;

            &::placeholder {
                font-size: 1.25rem;
                color: #c2c3cb;
            }
        }

        .buttons {
            display: flex;
            flex-direction: row;
            gap: 20px;
        }
    }

    @media only screen and (min-width: 1024px) {
        .title {
            text-align: center;
        }
    }

    @media only screen and (min-width: 1200px) {
        max-width: 600px;
        .shortDescription {
            font-size: 1em;
        }
    }
`;

export default Wrapper;
