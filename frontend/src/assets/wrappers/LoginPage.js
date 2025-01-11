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
        position: relative;
        margin-top: 24px;
        &::before {
            content: "";
            display: block;
            width: 100%;
            height: 1px;
            position: absolute;
            top: -8px;
            background-color: #acadb9;
        }
    }

    .otherMethodsSection {
        position: relative;
        margin-top: 60px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`;

export default Wrapper;
