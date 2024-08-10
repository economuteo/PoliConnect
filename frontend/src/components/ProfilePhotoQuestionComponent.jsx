import { Link } from "react-router-dom";

import Wrapper from "../assets/wrappers/ProfilePhotoQuestionComponent";

const ProfilePhotoQuestionComponent = () => {
    return (
        <Wrapper>
            <p className="title">Add the profile photo now?</p>
            <div className="buttons">
                <Link to="/authentification/addProfilePicture">
                    <button className="addNowButton">Add Now</button>
                </Link>
                <Link to="/authentification/accountCreated">
                    <button className="maybeLatterButton">Maybe later</button>
                </Link>
            </div>
        </Wrapper>
    );
};

export default ProfilePhotoQuestionComponent;
