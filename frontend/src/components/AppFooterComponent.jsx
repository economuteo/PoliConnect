import { NavLink } from "react-router-dom";

import { HouseIcon, MessagesIcon, NotificationsIcon, ProfileIcon } from "../components";

import { ReactComponent as PlusIcon } from "../assets/images/plus-icon.svg";

import Wrapper from "../assets/wrappers/AppFooterComponent";

const AppFooterComponent = () => {
    return (
        <Wrapper>
            <NavLink to="/feed">{({ isActive }) => <HouseIcon isActive={isActive} />}</NavLink>
            <NavLink to="/messages">
                {({ isActive }) => <MessagesIcon isActive={isActive} />}
            </NavLink>
            <NavLink to="/addPost">
                <PlusIcon />
            </NavLink>
            <NavLink to="/notifications">
                {({ isActive }) => <NotificationsIcon isActive={isActive} />}
            </NavLink>
            <NavLink to="/profile">{({ isActive }) => <ProfileIcon isActive={isActive} />}</NavLink>
        </Wrapper>
    );
};

export default AppFooterComponent;
