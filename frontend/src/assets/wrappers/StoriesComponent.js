import styled from "styled-components";

const Wrapper = styled.section`
    position: relative;
    padding: 0px 10px;
    margin-top: 15px;
    margin-bottom: 35px;
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

    &::after {
        content: "";
        position: absolute;
        bottom: -17.5px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: white;
    }
`;

export default Wrapper;
