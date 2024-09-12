import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/UserStoryTemplateComponent";
import { useLoaderData, useNavigate } from "react-router-dom";

export const userProfileImageLoader = async () => {
    const response = await customFetch.get("/users/currentUser");
    const currentUserProfileImage = response.data.user.profileImage;
    return currentUserProfileImage;
};

const CurrentUserStoryTemplateComponent = ({ userName, addStoryIcon }) => {
    const navigate = useNavigate();

    const handleSeeStory = () => {
        // Logic to be implemented here with state
        navigate("/stories");
    };

    const handleAddStory = () => {
        // Logic to be implemented here with state
        navigate("/story");
    };

    const userProfileImage = useLoaderData();

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
            <p>{userName}</p>
        </Wrapper>
    );
};

export default CurrentUserStoryTemplateComponent;
