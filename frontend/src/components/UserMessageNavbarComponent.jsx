import Wrapper from "../assets/wrappers/UserMessageNavbarComponent";
import SearchUsersBackIcon from "../assets/images/search-users-back-icon.png";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UserMessageNavbarComponent = () => {
    const [isNavigating, setIsNavigating] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleBackClick = () => {
        if (isNavigating) return;
        setIsNavigating(true);

        navigate(-1);
    };

    const user = location.state?.user;

    return (
        <Wrapper>
            <img onClick={handleBackClick} src={SearchUsersBackIcon} id="likesBackIcon" alt="" />
            <div className="userInformation">
                <img id="userImage" src={user.profileImage} alt="" />
                <div className="userDetails">
                    <p id="userFullName">{user.fullName}</p>
                    <p id="userUsername">{user.username}</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default UserMessageNavbarComponent;
