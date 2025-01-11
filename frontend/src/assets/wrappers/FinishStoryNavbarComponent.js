import styled from "styled-components";

const Wrapper = styled.section`
    margin-top: 20px;
    width: 100vw;

    .initialNav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .editTextNav {
        display: none;
        justify-content: end;
        align-items: center;
        p {
            font-size: 1rem;
            color: white;
            font-family: "Poppins Regular";
            cursor: pointer;
        }
    }

    .fade-out {
        display: none;
    }

    .fade-in {
        display: flex;
    }

    .closeButton {
        position: relative;
        width: 24px;
        height: 24px;
        cursor: pointer;

        &::before,
        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 1.75em;
            height: 2.5px;
            background-color: white;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }

    .addTextButton {
        width: 36px;
        height: 36px;
    }
`;

export default Wrapper;
