import styled from "styled-components";

const Wrapper = styled.main`
    margin-top: 40px;
    margin-bottom: 60px;
    /* Responsiveness */
    @media only screen and (min-width: 728px) {
        margin-top: 60px;
        margin-bottom: 60px;
    }
    @media only screen and (min-width: 1024px) {
        margin: 0px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export default Wrapper;
