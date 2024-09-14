import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import customFetch from "../utils/customFetch";

import Wrapper from "../assets/wrappers/UserStoryTemplateComponent";
import { AppContext } from "../contexts/AppContext";

const UserStoryTemplateComponent = ({ userName, userProfileImage, userId }) => {
    const navigate = useNavigate();
    const { setUserStoriesUrls } = useContext(AppContext);

    const handleSeeStory = async () => {
        const response = await customFetch.get(`/stories/getUserStories?userId=${userId}`);
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

    const handleAddStory = () => {
        navigate("/story");
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
            </div>
            <p>{userName}</p>
        </Wrapper>
    );
};

export default UserStoryTemplateComponent;
