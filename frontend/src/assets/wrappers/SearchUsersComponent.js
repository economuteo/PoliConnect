import styled from "styled-components";

const Wrapper = styled.section`
    .searchUsersField {
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

    img {
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
`;

export default Wrapper;
