import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 550px;

    .postCreatorBasicInformation {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 24px;
    }

    #userProfileImage {
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }

    #userUsername {
        font-size: 0.85em;
        font-family: "Poppins SemiBold";
        color: white;
    }

    #photo {
        width: 100%;
    }
`;

export default Wrapper;
