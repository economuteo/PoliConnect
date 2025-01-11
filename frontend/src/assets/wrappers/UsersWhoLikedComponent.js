import styled from "styled-components";

const Wrapper = styled.section`
    margin-top: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;

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

    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Safari, Chrome, and Edge */
    }
`;

export default Wrapper;
