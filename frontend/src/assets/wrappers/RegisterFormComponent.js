import styled from "styled-components";

const Wrapper = styled.section`
    .title {
        text-align: left;
        line-height: 125%;
        font-family: "Poppins SemiBold";
        font-size: 2.375rem;
        color: white;
    }

    .parent {
        max-width: 400px;
    }

    input {
        width: 100%;
        padding: 20px;
        padding-left: 62px;
        border: none;
        border-radius: 12px;
        background-color: #292c35;
        color: #c2c3cb;
        &::placeholder {
            color: #c2c3cb;
        }
    }

    .buttons {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    button {
        max-width: 400px;
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

    #exploreButton {
        background-color: green;
    }

    .parent {
        position: relative;
    }

    .childImage {
        position: absolute;
        top: 50%;
        left: 24px;
        transform: translateY(-50%);
    }

    .secondChildImage {
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
    }

    .registrationForm {
        margin-top: 2rem;
        display: grid;
        gap: 20px;
    }

    /* Responsiveness */
    @media only screen and (min-width: 1024px) {
        .parent {
            width: 350px;
        }

        .title {
            text-align: center;
        }

        .registrationForm {
            grid-template-columns: 1fr 1fr;
        }

        button {
            transform: translateX(50%);
        }
    }
`;

export default Wrapper;
