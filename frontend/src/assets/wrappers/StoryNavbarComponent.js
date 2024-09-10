import styled from "styled-components";

const Wrapper = styled.nav`
    position: sticky;
    top: 0;
    padding-top: 15px;
    padding-bottom: 10px;
    padding-left: 24px;
    padding-right: 24px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

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
            width: 1.25em;
            height: 1.5px;
            background-color: white;
        }

        &::before {
            transform: translate(-50%, -50%) rotate(45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }

    .title {
        color: white;
        font-family: "Poppins SemiBold";
        font-size: 1em;
    }

    @media only screen and (min-width: 768px) {
        .title {
            font-size: 1.15em;
        }
    }

    @media only screen and (min-width: 1200px) {
        .title {
            font-size: 1.25em;
        }

        .closeButton {
            &::before,
            &::after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                width: 1.5em;
                height: 2px;
                background-color: white;
            }
        }
    }
`;

export default Wrapper;
