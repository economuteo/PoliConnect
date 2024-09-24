import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;

    .user {
        width: 100%;
        display: grid;
        grid-template-columns: 5fr 2fr;
        align-items: center;
        padding: 16px 0px;
        border-bottom: 1px solid #292c35;
    }

    .seeUserProfile {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        cursor: pointer;
    }

    .userProfileImage {
        width: 44px;
        height: 44px;
        border-radius: 100%;
    }

    .userName {
        margin-left: 12px;
        font-size: 0.85em;
        font-family: "Poppins SemiBold";
        color: white;
    }

    .followButton {
        justify-self: end;
        width: auto;
        text-align: center;
        padding: 8px 12px;
        border-radius: 10px;
        font-size: 0.85em;
        font-family: "Poppins SemiBold";
        cursor: pointer;
        color: white;
        background-color: #0677e8;
        border: none;
        outline: none;
    }

    .followed {
        color: #0677e8;
        background-color: #102e53;
    }

    @media only screen and (min-width: 480px) {
        .userName {
            font-size: 1em;
        }

        .followButton {
            width: 100px;
            font-size: 1em;
        }
    }

    @media only screen and (min-width: 768px) {
        .followButton {
            width: 150px;
        }
    }
`;

export default Wrapper;
