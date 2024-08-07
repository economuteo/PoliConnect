import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .images {
        position: relative;
        display: flex;
        align-items: center;
    }

    .userProfilePicture {
        width: 54px;
        height: 54px;
        /* border: 2px solid #0677e8; */
        border-radius: 40px;
    }

    .addStoryIcon {
        position: absolute;
        bottom: -8px;
        right: -8px;
        width: 25px;
        height: 25px;
        border-radius: 40px;
    }

    p {
        font-family: "Poppins Regular";
        color: white;
    }
`;

export default Wrapper;
