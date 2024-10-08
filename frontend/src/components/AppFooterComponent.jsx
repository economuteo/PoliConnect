import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HouseIcon, MessagesIcon, NotificationsIcon, ProfileIcon } from "../components";
import { ReactComponent as PlusIcon } from "../assets/images/plus-icon.svg";
import Wrapper from "../assets/wrappers/AppFooterComponent";

const AppFooterComponent = () => {
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (path) => {
        if (!loading && location.pathname !== path) {
            setLoading(true);
            navigate(path);
        }
    };

    useEffect(() => {
        setLoading(false);
    }, [location.pathname]);

    return (
        <Wrapper>
            <div onClick={() => handleClick("/feed")}>
                <HouseIcon isActive={isActive} />
            </div>
            <div onClick={() => handleClick("/messages")}>
                <MessagesIcon isActive={isActive} />
            </div>
            <div onClick={() => handleClick("/addPost")}>
                <PlusIcon />
            </div>
            <div onClick={() => handleClick("/notifications")}>
                <NotificationsIcon isActive={isActive} />
            </div>
            <div onClick={() => handleClick("/profile")}>
                <ProfileIcon isActive={isActive} />
            </div>
        </Wrapper>
    );
};

export default AppFooterComponent;
