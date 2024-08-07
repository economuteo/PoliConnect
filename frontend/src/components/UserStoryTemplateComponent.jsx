import Wrapper from "../assets/wrappers/UserStoryTemplateComponent";

const UserStoryTemplateComponent = ({ userProfileImage, userName }) => {
    return (
        <Wrapper>
            <img src={userProfileImage} className="userProfilePicture" alt="UserPhoto" />
            <p>{userName}</p>
        </Wrapper>
    );
};

export default UserStoryTemplateComponent;
