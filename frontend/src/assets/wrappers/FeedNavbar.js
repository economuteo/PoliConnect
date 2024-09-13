import styled from "styled-components";

const Wrapper = styled.nav`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .special {
        font-family: "Poppins ExtraBold";
        letter-spacing: 4px;
        color: white;
        font-size: 1.375em;
    }

    .settingsImage {
        width: 24px;
        height: 24px;
    }

    .searchIcon {
        width: 24px;
        height: 24px;
    }

    .images {
        display: flex;
        gap: 18px;
    }

    @media only screen and (min-width: 1200px) {
        .settingsImage {
            width: 30px;
            height: 30px;
        }

        .messages {
            width: 30px;
            height: 30px;
        }
    }
`;

export default Wrapper;
