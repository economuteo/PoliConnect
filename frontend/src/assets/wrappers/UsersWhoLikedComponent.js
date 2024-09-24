import styled from "styled-components";

const Wrapper = styled.section`
    margin-top: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    .user {
        width: 100%;
    }

    .users {
        margin-top: 10px;
        width: 90%;
        overflow: scroll;
        height: 100%;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .users::-webkit-scrollbar {
        display: none;
    }
`;

export default Wrapper;
