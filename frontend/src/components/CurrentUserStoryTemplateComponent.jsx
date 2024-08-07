import Wrapper from "../assets/wrappers/UserStoryTemplateComponent";

const CurrentUserStoryTemplateComponent = ({ userProfileImage, userName, addStoryIcon }) => {
    return (
        <Wrapper>
            <div className="images">
                <img src={userProfileImage} className="userProfilePicture" alt="UserPhoto" />
                <img src={addStoryIcon} className="addStoryIcon" alt="Add story" />
            </div>
            <p>{userName}</p>
        </Wrapper>
    );
};

export default CurrentUserStoryTemplateComponent;
