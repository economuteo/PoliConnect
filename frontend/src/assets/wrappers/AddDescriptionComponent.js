import styled from "styled-components";

const Wrapper = styled.section`
    height: 90%;
    display: flex;
    flex-direction: column;

    .title {
        font-size: 2.375em;
        font-family: "Poppins SemiBold";
        color: white;
    }

    form {
        width: 100%;
        max-width: 600px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .descriptionBox {
        width: 100%;
        margin-top: 35px;
    }

    .description {
        font-family: "Poppins SemiBold";
        color: white;
    }

    .parent {
        margin-top: 10px;
    }

    textarea {
        height: 200px;
        width: 100%;
        padding: 15px;
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
        max-width: 400px;
        padding: 15px;
        margin-top: 20px;
        border: none;
        border-radius: 12px;
        color: white;
        background-color: #0677e8;
        cursor: pointer;

        &:hover {
            background-color: #0660f8;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
    }

    @media only screen and (min-width: 440px) {
        align-items: center;
    }
`;

export default Wrapper;
