import { NavLink } from "react-router-dom";
import { HouseIcon, MessagesIcon, NotificationsIcon, ProfileIcon } from "../components";
import PlusIcon from "../assets/images/plus-icon.svg";
import AppSidebarPostIcon from "../assets/images/app-sidebar-post-icon.png";
import Wrapper from "../assets/wrappers/AppSidebarComponent";

const AppSidebarComponent = () => {
    return (
        <Wrapper>
            <p className="special">POLICONNECT</p>
            <NavLink to="/feed">
                {({ isActive }) => (
                    <div className="iconWithText">
                        <HouseIcon isActive={isActive} />
                        <p>Home</p>
                    </div>
                )}
            </NavLink>

            <NavLink to="/messages">
                {({ isActive }) => (
                    <div className="iconWithText">
                        <MessagesIcon isActive={isActive} />
                        <p>Messages</p>
                    </div>
                )}
            </NavLink>
            <NavLink to="/notifications">
                {({ isActive }) => (
                    <div className="iconWithText">
                        <NotificationsIcon isActive={isActive} />
                        <p>Notifications</p>
                    </div>
                )}
            </NavLink>
            <NavLink to="/profile">
                {({ isActive }) => (
                    <div className="iconWithText">
                        <ProfileIcon isActive={isActive} />
                        <p>My Profile</p>
                    </div>
                )}
            </NavLink>
            <NavLink to="/addPost">
                <div className="iconWithText">
                    <img id="plusIcon" src={AppSidebarPostIcon} />
                    <p>Add Post</p>
                </div>
            </NavLink>
        </Wrapper>
    );
};

export default AppSidebarComponent;
