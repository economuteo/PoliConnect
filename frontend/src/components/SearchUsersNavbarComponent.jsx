import { useNavigate } from "react-router-dom";

import SearchUsersBackIcon from "../assets/images/search-users-back-icon.png";

import Wrapper from "../assets/wrappers/SearchUsersNavbarComponent";

const SearchUsersNavbarComponent = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleBackClick = () => {
        navigate(-1); // Navigate back
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
