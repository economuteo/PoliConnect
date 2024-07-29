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
        font-size: 1em;
        font-family: "Poppins SemiBold";
        text-decoration: none;
        color: #0677e8;
    }

    .didntHave {
        margin-top: 10px;
    }

    .otherMethodsSection {
        position: relative;
        margin-top: 60px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        &::before {
            position: absolute;
            top: -20px;
            content: "";
            display: block;
            width: 100vw;
            max-width: 500px;
            height: 1px;
            background-color: #acadb9;
        }
    }
`;

export default Wrapper;
