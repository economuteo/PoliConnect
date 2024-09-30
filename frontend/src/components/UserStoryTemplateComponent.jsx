import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import customFetch from "../utils/customFetch";

import Wrapper from "../assets/wrappers/UserStoryTemplateComponent";

const UserStoryTemplateComponent = ({ user }) => {
    const navigate = useNavigate();

    const handleSeeStory = async () => {
        navigate("/stories", { state: { stories: user.stories } });
    };

    const navigateToUserProfilePage = (userName) => {
        navigate(`/feed/userProfile/${userName}`, { state: { user } });
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
