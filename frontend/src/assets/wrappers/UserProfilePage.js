import styled from "styled-components";

const Wrapper = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    nav {
        width: calc(100vw - 48px);
        position: fixed;
        top: 0;
    }
`;

export default Wrapper;
