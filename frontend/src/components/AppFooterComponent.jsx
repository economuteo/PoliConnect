import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { HouseIcon, MessagesIcon, NotificationsIcon, ProfileIcon } from "../components";
import { ReactComponent as PlusIcon } from "../assets/images/plus-icon.svg";
import Wrapper from "../assets/wrappers/AppFooterComponent";

const AppFooterComponent = () => {
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (path) => {
        if (!loading) {
            setLoading(true);
            navigate(path);
        }
    };

    useEffect(() => {
        setLoading(false);
    }, [location.pathname]);

    return (
        <Wrapper>
            <div onClick={() => handleClick("/feed")} disabled={loading}>
                <HouseIcon isActive={isActive} />
            </div>
            <div onClick={() => handleClick("/messages")} disabled={loading}>
                <MessagesIcon isActive={isActive} />
            </div>
            <div onClick={() => handleClick("/addPost")} disabled={loading}>
                <PlusIcon />
            </div>
            <div onClick={() => handleClick("/notifications")} disabled={loading}>
                {({ isActive }) => <NotificationsIcon isActive={isActive} />}
            </div>
            <div onClick={() => handleClick("/profile")} disabled={loading}>
                {({ isActive }) => <ProfileIcon isActive={isActive} />}
            </div>
        </Wrapper>
    );
};

export default AppFooterComponent;
