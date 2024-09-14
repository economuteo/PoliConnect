import styled from "styled-components";

const Wrapper = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    .searchUsersField {
        width: 90%;
        margin-top: 34px;
        position: relative;
    }

    input {
        width: 100%;
        padding: 20px;
        border: none;
        border-radius: 12px;

        background-color: #292c35;
        color: #c2c3cb;
        &::placeholder {
            color: #c2c3cb;
            font-size: 0.875rem;
        }
    }

    .searchIcon {
        position: absolute;
        top: 50%;
        right: 24px;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
    }

    .nothingSearchedYetText {
        overflow: hidden;
        margin-top: 20px;
        text-align: center;
        font-size: 3em;
        font-family: "Poppins SemiBold";
        color: #7c7878;
    }

    .users {
        width: 90%;
        overflow: scroll;
        height: 100%;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .users::-webkit-scrollbar {
        display: none;
    }

    .user {
        width: 100%;
        display: grid;
        grid-template-columns: auto 2fr 1fr;
        align-items: center;
        padding: 16px 0px;
        border-bottom: 1px solid #292c35;
    }

    .userName {
        margin-left: 12px;
        font-size: 1em;
        font-family: "Poppins SemiBold";
        color: white;
    }

    .userProfileImage {
        width: 44px;
        height: 44px;
        border-radius: 100%;
    }

    .followButton {
        align-self: end;
        max-width: 150px;
        text-align: center;
        padding: 8px;
        border-radius: 10px;
        font-family: "Poppins SemiBold";
        cursor: pointer;
        color: #0677e8;
        background-color: #102e53;
    }
`;

export default Wrapper;
