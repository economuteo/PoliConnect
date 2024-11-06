import styled from "styled-components";

const Wrapper = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
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

    .special {
        margin-top: 15px;
        font-family: "Poppins Medium";
        color: white;
        font-size: 1.6875rem;
    }

    .menuOptions {
        margin-top: 60px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 26px;
    }

    .option {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 26px;
        color: white;
        font-family: "Poppins Regular";
    }
`;

export default Wrapper;
