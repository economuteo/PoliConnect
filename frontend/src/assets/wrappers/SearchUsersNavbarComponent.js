import styled from "styled-components";

const Wrapper = styled.nav`
    margin-top: 15px;
    display: flex;
    align-items: center;
    z-index: 10;

    .searchUsersBackIcon {
        width: 32px;
        height: 32px;
    }

    p {
        margin-left: 16px;
        font-size: 1.5em;
        font-family: "Poppins SemiBold";
        color: white;
    }

    @media only screen and (min-width: 1024px) {
        padding: 0 24px;
    }
`;

export default Wrapper;
