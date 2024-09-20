import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 550px;
    margin-top: 15px;
    padding: 0px 24px;

    .postCreatorBasicInformation {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 0px;
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

    .eventPostContent {
        display: flex;
        flex-direction: column;

        background-color: #292c35;
        padding: 16px;
        border-radius: 20px;

        #eventName {
            font-size: 1.25em;
            font-family: "Poppins Medium";
            color: white;
        }

        .eventDetails {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin: 10px 0px;
        }

        .eventDetail {
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: "Poppins Medium";
            color: white;
        }

        #icons {
            width: 28px;
            height: 28px;
        }

        .joinNowButton {
            align-self: flex-end;
            width: fit-content;
            background-color: #0677e8;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 20px;
            font-family: "Poppins Medium";
            cursor: pointer;

            transition: background-color 0.3s ease;

            &.joined {
                background-color: #4caf50;
            }
        }
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

    .eventPostDescription {
        margin-top: 10px;
    }

    #descriptionSection {
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
        font-size: 0.85em;
        font-family: "Poppins SemiBold";
        color: white;
    }

    .postReactions {
        margin-top: 15px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;

        .reaction {
            display: flex;
            align-items: center;
            gap: 8px;
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
