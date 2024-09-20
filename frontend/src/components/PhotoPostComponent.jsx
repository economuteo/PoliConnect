import Wrapper from "../assets/wrappers/PhotoPostComponent";

const PhotoPostComponent = ({ photoPost }) => {
    return (
        <Wrapper>
            <div className="postCreatorBasicInformation">
                <img id="userProfileImage" src={photoPost.userProfileImage} alt="" />
                <p id="userUsername">{photoPost.userUsername}</p>
            </div>
            <div className="photoPostContent">
                <img id="photo" src={photoPost.mediaUrl} alt="" />
            </div>
        </Wrapper>
    );
};

export default PhotoPostComponent;
