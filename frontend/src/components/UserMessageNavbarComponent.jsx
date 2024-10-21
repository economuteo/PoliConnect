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

    return (
        <Wrapper>
            <img
                onClick={handleBackClick}
                src={SearchUsersBackIcon}
                className="likesBackIcon"
                alt=""
            />
            <div className="userInformation">
                <p>{}</p>
                <p></p>
            </div>
        </Wrapper>
    );
};

export default UserMessageNavbarComponent;
