import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .cover {
        display: flex;
        justify-content: center;
        width: 100vw;
        background-color: black;
    }

    .post {
        max-width: 300px;
        width: 100%;
        height: 450px;
    }
`;

export default Wrapper;
