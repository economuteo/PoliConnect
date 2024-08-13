import styled from "styled-components";

const Wrapper = styled.section`
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;

    .swiper {
        margin-left: 0px !important;
    }

    .swiper-slide {
        width: auto !important;
    }

    .swiper-pagination {
        display: none !important;
    }
`;

export default Wrapper;
