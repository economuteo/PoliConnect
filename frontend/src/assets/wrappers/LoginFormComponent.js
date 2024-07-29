import styled from "styled-components";

const Wrapper = styled.main`
    .title {
        text-align: left;
        line-height: 125%;
        font-family: "Poppins SemiBold";
        font-size: 2.375rem;
        color: white;
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

    button {
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
        display: grid;
        gap: 20px;
    }

    .goodLine {
        width: 100%;
        display: flex;
        align-items: center;
    }

    .saveMeForget {
        margin-left: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 0.75rem;
        font-family: "Poppins Medium";
        color: #9d9cb1;
    }

    /* Responsiveness */
    @media only screen and (min-width: 1024px) {
        .title {
            text-align: center;
        }

        .registrationForm {
            grid-template-columns: 1fr 1fr;
        }

        .saveMeForget {
            font-size: 0.875rem;
        }
    }
`;

export default Wrapper;
