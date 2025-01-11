import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/ProfilePage";
import { ReactComponent as LogoutIcon } from "../assets/images/logout-icon.svg";
import customFetch from "../utils/customFetch";

const ProfilePage = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleLogoutUser = async () => {
        await customFetch("/auth/logout");
        navigate("/authentification");
    };

    const confirmLogout = () => {
        setShowModal(true);
    };

    const cancelLogout = () => {
        setShowModal(false);
    };

    return (
        <Wrapper className="container">
            <div className={`normalPage ${showModal ? "blurred" : ""}`}>
                <p className="special">Settings</p>
                <div className="userProfile"></div>
                <div className="menuOptions">
                    <div className="option" onClick={confirmLogout}>
                        <LogoutIcon />
                        <p>Logout</p>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Are you sure you want to log out?</p>
                        <div className="buttons">
                            <button id="yesButton" onClick={handleLogoutUser}>
                                Yes
                            </button>
                            <button id="noButton" onClick={cancelLogout}>
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Wrapper>
    );
};

export default ProfilePage;
