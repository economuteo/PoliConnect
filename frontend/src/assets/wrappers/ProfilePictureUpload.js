import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        text-align: center;
        line-height: 125%;
        font-family: "Poppins SemiBold";
        font-size: 2.375rem;
        color: white;
    }

    .finalImage {
        margin-top: 30px;
        width: 250px;
        height: 250px;
        border: 2px solid #ccc;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    form {
        width: 100%;
        max-width: 400px;
    }

    .buttons {
        width: 100%;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    button {
        width: 100%;
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

    input[type="file"] {
        display: none;
    }

    @media only screen and (min-width: 1200px) {
        .buttons {
            flex-direction: row;
            gap: 20px;
        }
    }
`;

export default Wrapper;
