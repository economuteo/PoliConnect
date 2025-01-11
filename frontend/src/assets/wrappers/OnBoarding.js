import styled from "styled-components";

const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-pagination-bullets {
        margin-top: 20px;
        position: static;
    }
`;

export default Wrapper;
