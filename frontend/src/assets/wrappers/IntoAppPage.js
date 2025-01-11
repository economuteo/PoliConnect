import styled from "styled-components";

const Wrapper = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 1024px) {
        flex-direction: row-reverse;
    }
`;

export default Wrapper;
