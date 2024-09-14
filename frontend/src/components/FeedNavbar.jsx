import { useNavigate } from "react-router-dom";

import settings from "../assets/images/settings.png";
import searchIcon from "../assets/images/search-icon.png";

import Wrapper from "../assets/wrappers/FeedNavbar";

const FeedNavbar = () => {
    const navigate = useNavigate();

    const handleSearchIconClick = () => {
        navigate("searchUsers");
    };

    return (
        <Wrapper className="container">
            <span className="special">CONNECT</span>
            <div className="images">
                <img src={settings} className="settingsImage" alt="settings" />
                <img
                    onClick={handleSearchIconClick}
                    src={searchIcon}
                    className="searchIcon"
                    alt="searchIcon"
                />
            </div>
        </Wrapper>
    );
};

export default FeedNavbar;
