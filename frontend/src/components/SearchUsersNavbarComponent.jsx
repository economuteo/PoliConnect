import { useNavigate } from "react-router-dom";

import SearchUsersBackIcon from "../assets/images/search-users-back-icon.png";

import Wrapper from "../assets/wrappers/SearchUsersNavbarComponent";
import { useState } from "react";

const SearchUsersNavbarComponent = () => {
    const navigate = useNavigate();
    const [isNavigating, setIsNavigating] = useState(false);

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
                className="searchUsersBackIcon"
                alt=""
            />
            <p>Search</p>
        </Wrapper>
    );
};

export default SearchUsersNavbarComponent;
