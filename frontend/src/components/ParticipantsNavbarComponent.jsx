import { useNavigate } from "react-router-dom";
import { useState } from "react";

import SearchUsersBackIcon from "../assets/images/search-users-back-icon.png";

import Wrapper from "../assets/wrappers/LikesNavbarComponent";

const ParticipantsNavbarComponent = () => {
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
            <p>Participants</p>
        </Wrapper>
    );
};

export default ParticipantsNavbarComponent;
