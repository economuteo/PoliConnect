import { useLoaderData, useNavigate } from "react-router-dom";

import customFetch from "../utils/customFetch";

import Wrapper from "../assets/wrappers/UserStoryTemplateComponent";

import AddStoryIcon from "../assets/images/add-story-icon.png";

export const userProfileImageLoader = async () => {
    const response = await customFetch.get("/users/specificUser");
    const currentUserProfileImage = response.data.profileImage;
    return currentUserProfileImage;
};

const CurrentUserStoryTemplateComponent = ({ user }) => {
    const navigate = useNavigate();
    const { userProfileImage } = useLoaderData();

    const handleSeeStory = async () => {
        if (user.storiesMediaURLs && user.storiesMediaURLs.length > 0) {
            navigate("/stories", {
                state: { isCurrentUser: true, stories: user.storiesMediaURLs },
            });
        }
    };

    const handleAddStory = () => {
        navigate("/story");
    };

    const navigateToUserProfilePage = (userName) => {
        navigate(`/feed/userProfile/${userName}`, { state: { user } });
    };

    return (
        <Wrapper>
            <div className="images">
                <img
                    onClick={handleSeeStory}
                    src={userProfileImage}
                    className="userProfilePicture"
                    alt="UserPhoto"
                />
                <img
                    onClick={handleAddStory}
                    src={AddStoryIcon}
                    className="addStoryIcon"
                    alt="Add story"
                />
            </div>
            <p onClick={() => navigateToUserProfilePage(user.username)}>Your story</p>
        </Wrapper>
    );
};

export default CurrentUserStoryTemplateComponent;
