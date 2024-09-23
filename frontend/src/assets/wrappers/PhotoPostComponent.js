import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 550px;

    .postCreatorBasicInformation {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0px 10px;
        margin-bottom: 10px;
    }

    #userProfileImage {
        width: 30px;
        height: 30px;
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

    .eventPostDescription {
        margin-top: 10px;
    }

    #descriptionSection {
        padding: 0px 10px;
        font-size: 0.85em;
        font-family: "Poppins Light";
        color: white;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        max-height: 3em;
        transition: max-height 0.3s ease;
    }

    #descriptionSection.expanded {
        display: block;
        max-height: none;
    }

    #descriptionUserUsername {
        margin-right: 10px;
        font-size: 0.9em;
        font-family: "Poppins SemiBold";
        color: white;
    }

    .readMoreButton {
        background: none;
        border: none;
        color: #1e90ff;
        cursor: pointer;
        font-family: "Poppins Medium";
        padding: 0;
        margin-top: 5px;
    }

    .postReactions {
        padding: 0px 10px;
        margin-top: 10px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;

        .reaction {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        svg {
            width: 24px;
            height: 24px;
        }

        img {
            width: 24px;
            height: 24px;
        }

        p {
            font-family: "Poppins Medium";
            color: white;
        }
    }
`;

export default Wrapper;
