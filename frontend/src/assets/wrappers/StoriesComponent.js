import styled from "styled-components";

const Wrapper = styled.section`
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;

    .swiper {
        width: 100% !important;
        margin-left: 0px !important;
    }

    .swiper-wrapper {
        gap: 18px !important;
    }

    .swiper-slide {
        width: auto !important;
    }

    .swiper-pagination {
        display: none;
    }
`;

export default Wrapper;
