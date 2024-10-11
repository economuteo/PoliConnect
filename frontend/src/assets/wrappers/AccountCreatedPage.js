import styled from "styled-components";

const Wrapper = styled.section`
    margin-top: -40px;
    margin-bottom: -60px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .successIcon {
        width: 250px;
        height: 250px;
    }

    .title {
        margin-top: 50px;
        font-size: 2.375em;
        font-family: "Poppins Bold";
        color: #ffff;
    }

    .shortDescription {
        margin-top: 16px;
        font-size: 1em;
        font-family: "Poppins Regular";
        color: #acadb9;
    }

    button {
        margin-top: 35px;
        width: 200px;
        padding: 15px;
        border: none;
        border-radius: 15px;
        font-size: 1em;
        font-family: "Poppins SemiBold";
        background-color: #0677e8;
        color: #ffff;
        cursor: pointer;
    }

    nav {
        display: none !important;
    }

    a {
        margin-top: 100px;
        text-decoration: none;
        color: #ffff;
    }

    /* Responsiveness */
    @media only screen and (min-width: 768px) {
        .successIcon {
            width: 300px;
            height: 300px;
        }

        .shortDescription {
            font-size: 1.25em;
        }

        button {
            width: 250px;
            padding: 20px;
        }
    }

    @media only screen and (min-width: 1200px) {
        .successIcon {
            width: 325px;
            height: 325px;
        }

        button {
            width: 300px;
            padding: 25px;
        }
    }
`;

export default Wrapper;
