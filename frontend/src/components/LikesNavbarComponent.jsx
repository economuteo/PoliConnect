import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchUsersBackIcon from "../assets/images/search-users-back-icon.png";

import Wrapper from "../assets/wrappers/LikesNavbarComponent";

const LikesNavbarComponent = () => {
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
            <p>Likes</p>
        </Wrapper>
    );
};

export default LikesNavbarComponent;
