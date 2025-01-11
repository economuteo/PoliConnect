import styled from "styled-components";

const Wrapper = styled.main`
    position: fixed;
    top: 50vh;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 1s ease-out;

    &.fade-out {
        opacity: 0;
    }

    p {
        text-align: center;
    }

    .backLight {
        width: 237px;
        height: 233px;
        position: absolute;
        z-index: -1;
    }

    .title {
        font-size: 2.6875rem;
        font-family: "Poppins ExtraBold";
        letter-spacing: 8px;
        color: #fff;
    }

    /* Responsiveness */
    @media only screen and (min-width: 768px) {
        .backLight {
            width: 437px;
            height: 433px;
        }

        .title {
            font-size: 3.75rem;
        }
    }

    @media only screen and (min-width: 1024px) {
        .backLight {
            width: 500px;
            height: 513px;
        }

        .title {
            font-size: 4.5rem;
        }
    }
`;

export default Wrapper;
