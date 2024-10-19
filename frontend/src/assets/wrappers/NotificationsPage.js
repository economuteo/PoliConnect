import styled from "styled-components";

const Wrapper = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: scroll;

    /* Hide scrollbars for WebKit browsers (Chrome, Safari) */
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    /* Hide scrollbars for Firefox */
    scrollbar-width: none;

    /* Hide scrollbars for Internet Explorer and Edge */
    -ms-overflow-style: none;

    /* Hide scrollbars for older versions of Edge */
    & {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`;

export default Wrapper;
