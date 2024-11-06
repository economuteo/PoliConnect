import Wrapper from "../assets/wrappers/ProfilePage";
import { ReactComponent as LogoutIcon } from "../assets/images/logout-icon.svg";

const ProfilePage = () => {
    return (
        <Wrapper className="container">
            <p className="special">Settings</p>
            <div className="userProfile"></div>
            <div className="menuOptions">
                <div className="option">
                    <LogoutIcon />
                    <p>Logout</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default ProfilePage;
