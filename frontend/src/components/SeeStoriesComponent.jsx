import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Stories from "react-insta-stories";

import { AppContext } from "../contexts/AppContext";
import { ReactComponent as MoreIcon } from "../assets/images/more-icon.svg";

import Wrapper from "../assets/wrappers/SeeStories";

const SeeStoriesComponent = () => {
    const location = useLocation();
    const [isCurrentUser, setIsCurrentUser] = useState(location.state?.isCurrentUser || false);

    const { userStoriesUrls } = useContext(AppContext);
    const stories = userStoriesUrls;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDeleteStory = () => {};

    const handleOpenOptionsModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseOptionsModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Wrapper>
            <Stories
                width={"100vw"}
                height={"90vh"}
                className="stories"
                stories={stories}
                defaultInterval={1500}
            />
            {isCurrentUser && (
                <div className="storyFooter">
                    <div
                        className={
                            isModalOpen ? "currentUserMoreOptionsHidden" : "currentUserMoreOptions"
                        }
                        onClick={handleOpenOptionsModal}>
                        <MoreIcon />
                        <p>More</p>
                    </div>
                </div>
            )}
            {isModalOpen && (
                <div className="modal" onClick={handleCloseOptionsModal}>
                    <div className="modalContent">
                        <div className="option" onClick={handleDeleteStory}>
                            <p id="deleteText">Delete Story</p>
                        </div>
                    </div>
                    <div className="option cancelButton" onClick={handleCloseOptionsModal}>
                        <p>Cancel</p>
                    </div>
                </div>
            )}
        </Wrapper>
    );
};

export default SeeStoriesComponent;
