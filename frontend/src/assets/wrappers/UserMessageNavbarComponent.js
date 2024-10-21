import styled from "styled-components";

const Wrapper = styled.nav`
    width: 100vw;
    padding-top: 15px;
    padding-bottom: 10px;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    align-items: center;
    gap: 20px;
    background-color: #292c35;

    #likesBackIcon {
        width: 32px;
        height: 32px;
    }

    #userImage {
        border-radius: 20px;
        width: 40px;
        height: 40px;
    }

    .userInformation {
        gap: 10px;
        display: flex;
        align-items: center;
        font-family: "Poppins Regular";
        color: white;
    }

    .userDetails {
        display: flex;
        flex-direction: column;
    }

    #userUsername {
        font-size: 0.85em;
    }
`;

export default Wrapper;
