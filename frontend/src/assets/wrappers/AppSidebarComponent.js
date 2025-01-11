import styled from "styled-components";

const Wrapper = styled.section`
    /* position: relative;
    bottom: 0px; */
    padding: 12px 24px;
    display: flex;
    flex-direction: column;
    gap: 80px;
    align-items: center;
    z-index: 10;
    background-color: #131420;

    a {
        width: 100%;
        text-decoration: none;
    }

    .special {
        font-family: "Poppins ExtraBold";
        letter-spacing: 4px;
        color: white;
        font-size: 1.375em;
    }

    .iconWithText {
        display: flex;
        align-items: center;
        gap: 30px;

        p {
            font-weight: 500;
            font-family: "Poppins Medium";
            color: #fff;
        }

        #plusIcon {
            width: 25px;
            height: 25px;
        }
    }
`;

export default Wrapper;
