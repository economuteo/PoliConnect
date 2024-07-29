import styled from "styled-components";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    .successIcon {
        width: 250px;
        height: 250px;
    }

    .title {
        margin-top: 50px;
        font-size: 2.8em;
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
        width: 200px;
        margin-top: 100px;
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
        text-decoration: none;
        color: #ffff;
    }

    /* Responsiveness */
    @media only screen and (min-width: 768px) {
        .successIcon {
            width: 300px;
            height: 300px;
        }

        .title {
            font-size: 3.5em;
        }

        .shortDescription {
            font-size: 1.2em;
        }

        button {
            width: 250px;
            padding: 20px;
            font-size: 1.2em;
        }
    }

    @media only screen and (min-width: 1024px) {
        .successIcon {
            width: 350px;
            height: 350px;
        }

        .title {
            font-size: 4.5em;
        }

        .shortDescription {
            font-size: 1.5em;
        }

        button {
            width: 300px;
            padding: 25px;
            font-size: 1.5em;
        }
    }
`;

export default Wrapper;
