import { useNavigate } from "react-router-dom";

import settings from "../assets/images/settings.png";
import searchIcon from "../assets/images/search-icon.png";

import Wrapper from "../assets/wrappers/FeedNavbar";
import useIsSmallDevice from "../customHooks/useIsSmallDevice";

const FeedNavbar = () => {
    const isSmallDevice = useIsSmallDevice();

    const navigate = useNavigate();

    const handleSearchIconClick = () => {
        navigate("searchUsers");
    };

    return (
        <Wrapper>
            {isSmallDevice ? <span className="special">CONNECT</span> : <span></span>}
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
