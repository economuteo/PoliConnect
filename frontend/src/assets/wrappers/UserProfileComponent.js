import styled from "styled-components";

const Wrapper = styled.main`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .userName {
        font-family: "Poppins SemiBold";
        color: white;
    }

    .userBannerImage {
        object-fit: cover;
        width: 100vw;
        max-height: 200px;
    }

    .userProfileImageParent {
        padding: 20px;
        margin-top: -80px;
        border-radius: 100%;
        z-index: 10;
        background-color: #131621;
    }

    .userProfileImage {
        width: 110px;
        height: 110px;
        border-radius: 100%;
    }

    .about {
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .aboutUser {
        text-align: center;
        font-family: "Poppins SemiBold";
        color: #828796;
        font-size: 0.75em;
    }

    .buttons {
        margin-top: 15px;
        display: flex;
        gap: 10px;
    }

    .button {
        width: 100px;
        padding: 10px 0px;
        text-align: center;
        border-radius: 25px;
        font-family: "Poppins Regular";
        color: white;
    }

    .follow,
    #editProfileButton {
        background-color: #2f80ed;
    }

    .unfollow {
        background-color: red;
    }

    #messageButton {
        border: 1px solid #444a5e;
        background-color: transparent;
    }

    @media only screen and (min-width: 480px) {
        .userName {
            font-size: 1.25em;
        }
        .aboutUser {
            font-size: 0.875em;
        }
    }

    @media only screen and (min-width: 768px) {
        .aboutUser {
            font-size: 1em;
        }
    }
`;

export default Wrapper;
