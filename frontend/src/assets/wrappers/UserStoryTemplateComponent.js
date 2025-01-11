import styled from "styled-components";

const Wrapper = styled.div`
    width: 66px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 3px;

    .images {
        position: relative;
        display: flex;
        align-items: center;
    }

    .userProfilePicture {
        width: 100%;
        height: 66px;
        border: 2px solid gray;
        border-radius: 40px;
    }

    .addStoryIcon {
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 25px;
        height: 25px;
        border-radius: 40px;
    }

    p {
        font-size: 0.75em;
        font-family: "Poppins Regular";
        overflow: hidden;
        text-overflow: ellipsis;
        color: white;
    }
`;

export default Wrapper;
