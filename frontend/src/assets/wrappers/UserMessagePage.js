import styled from "styled-components";

const Wrapper = styled.main`
    flex: 1;
    display: grid;
    grid-template-rows: auto 1fr auto;
    .connectingMessage {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Poppins Regular";
        color: white;
    }
`;

export default Wrapper;
