import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import customFetch from "../utils/customFetch";

import Wrapper from "../assets/wrappers/UserStoryTemplateComponent";
import { AppContext } from "../contexts/AppContext";

export const userProfileImageLoader = async () => {
    const response = await customFetch.get("/users/specificUser");
    const currentUserProfileImage = response.data.profileImage;
    return currentUserProfileImage;
};

const CurrentUserStoryTemplateComponent = ({ userName, addStoryIcon }) => {
    const navigate = useNavigate();
    const { userProfileImage } = useLoaderData();
    const { setUserStoriesUrls } = useContext(AppContext);

    const handleSeeStory = async () => {
        const response = await customFetch.get("/stories/getCurrentUserStories");
        const userStories = response.data;
        const userStoriesURLs = [];
        for (let i = 0; i < userStories.length; i++) {
            userStoriesURLs.push(userStories[i].mediaUrl);
        }
        if (userStoriesURLs.length !== 0) {
            setUserStoriesUrls(userStoriesURLs);
            navigate("/stories", { state: { isCurrentUser: true } });
        }
    };

    const handleAddStory = () => {
        navigate("/story");
    };

    const navigateToUserProfilePage = (userName) => {
        navigate(`/feed/userProfile/${userName}`);
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
                    src={addStoryIcon}
                    className="addStoryIcon"
                    alt="Add story"
                />
            </div>
            <p onClick={() => navigateToUserProfilePage(userName)}>Your story</p>
        </Wrapper>
    );
};

export default CurrentUserStoryTemplateComponent;
