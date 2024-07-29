import styled from "styled-components";

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-family: "Poppins Medium";
        color: #acadb9;
    }

    a {
        font-family: "Poppins SemiBold";
        text-decoration: none;
        color: #0677e8;
    }

    .registerButtonsPart {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }

    .alreadyHad {
        margin-top: 24px;
        position: relative;
        &::before {
            content: "";
            display: block;
            width: 100%;

            height: 1px;
            position: absolute;
            top: -8px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #acadb9;
        }
    }
`;

export default Wrapper;
