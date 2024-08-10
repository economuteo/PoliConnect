import styled from "styled-components";

const Wrapper = styled.section`
    .title {
        font-size: 2.375em;
        font-family: "Poppins SemiBold";
        text-align: center;
        color: #f9f9ff;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
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

    a {
        width: 100%;
        text-decoration: none;
        color: #f9f9ff;
    }

    @media only screen and (min-width: 768px) {
        .buttons {
            flex-direction: row;
            gap: 20px;
        }
    }

    @media only screen and (min-width: 1200px) {
        .buttons {
            flex-direction: row;
            gap: 20px;
        }
    }
`;

export default Wrapper;
