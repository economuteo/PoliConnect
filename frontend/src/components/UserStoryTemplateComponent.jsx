import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import customFetch from "../utils/customFetch";

import Wrapper from "../assets/wrappers/UserStoryTemplateComponent";
import { AppContext } from "../contexts/AppContext";

const UserStoryTemplateComponent = ({ user }) => {
    const navigate = useNavigate();
    const { setUserStoriesUrls } = useContext(AppContext);

    const handleSeeStory = async () => {
        const response = await customFetch.get(`/stories/getUserStories?userId=${user._id}`);
        const userStories = response.data;
        const userStoriesURLs = [];
        for (let i = 0; i < userStories.length; i++) {
            userStoriesURLs.push(userStories[i].mediaUrl);
        }
        if (userStoriesURLs.length !== 0) {
            setUserStoriesUrls(userStoriesURLs);
            navigate("/stories");
        }
    };

    const navigateToUserProfilePage = (userName) => {
        navigate(`/feed/userProfile/${userName}`);
    };

    return (
        <Wrapper>
            <div className="images">
                <img
                    onClick={handleSeeStory}
                    src={user.profileImage}
                    className="userProfilePicture"
                    alt="UserPhoto"
                />
            </div>
            <p onClick={() => navigateToUserProfilePage(user.username)}>{user.username}</p>
        </Wrapper>
    );
};

export default UserStoryTemplateComponent;
