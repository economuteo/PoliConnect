import Wrapper from "../assets/wrappers/UserMessageNavbarComponent";
import SearchUsersBackIcon from "../assets/images/search-users-back-icon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserMessageNavbarComponent = () => {
    const [isNavigating, setIsNavigating] = useState(false);

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
        </Wrapper>
    );
};

export default UserMessageNavbarComponent;
