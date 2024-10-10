import { useContext, useEffect, useState } from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import Stories from "react-insta-stories";

import { ReactComponent as MoreIcon } from "../assets/images/more-icon.svg";

import Wrapper from "../assets/wrappers/SeeStories";
import customFetch from "../utils/customFetch";

const SeeStoriesComponent = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isCurrentUser, setIsCurrentUser] = useState(location.state?.isCurrentUser || false);
    const [user, setUser] = useState(location.state?.user);
    const [stories, setStories] = useState(location.state?.stories);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    const handleDeleteStory = async () => {
        const specificStoryUrl = stories[currentStoryIndex];
        setIsModalOpen(false);
        setIsPaused(true);
        await customFetch.post("/stories/deleteStory", { storyURL: specificStoryUrl });
        setIsPaused(false);
        navigate("/feed");
    };

    const handleOpenOptionsModal = () => {
        setIsPaused(true);
        setIsModalOpen(true);
    };

    const handleCloseOptionsModal = () => {
        setIsPaused(false);
        setIsModalOpen(false);
    };

    const handleStoryStart = (storyIndex, story) => {
        setCurrentStoryIndex(storyIndex);
    };

    return (
        <Wrapper>
            <div className="userInformation">
                <img src={user.profileImage}></img>
                <span>{user.username}</span>
            </div>
            {stories.length > 0 ? (
                <Stories
                    width={"100vw"}
                    height={"90vh"}
                    className="stories"
                    stories={stories}
                    defaultInterval={2000}
                    isPaused={isPaused}
                    onStoryStart={handleStoryStart}
                />
            ) : (
                <div>Loading stories...</div>
            )}
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
