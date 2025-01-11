import styled from "styled-components";

const Wrapper = styled.footer`
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .rightArrow {
        width: 40px;
        height: 40px;
    }
    .submitModal {
        padding: 20px;
        border-radius: 10px;
        position: absolute;
        font-family: "Poppins SemiBold";
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: aliceblue;
    }
`;

export default Wrapper;
