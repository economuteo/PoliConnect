import { useState } from "react";
import { Navigate, useLoaderData, useLocation, useNavigate } from "react-router-dom";

import Wrapper from "../assets/wrappers/UserProfileComponent";

import customFetch from "../utils/customFetch";

export const isUserFollowedLoader = async ({ params }) => {
    const { username } = params;

    const response = await customFetch.post(`/followers/isUserFollowed?username=${username}`);
    const isFollowed = response.data.isFollowing;

    // Logic for checking if it's the current user profile
    const secondResponse = await customFetch.post("/users/isCurrentUser", { username });
    const isCurrentUserProfile = secondResponse.data.isCurrentUser;

    return { isFollowed, isCurrentUserProfile };
};

const UserProfilePage = () => {
    const navigate = useNavigate();

    const loaderData = useLoaderData();
    const { isFollowed, isCurrentUserProfile } = loaderData;

    const [followed, setFollowed] = useState(isFollowed);
    const [currentUserProfile, setCurrentUserProfile] = useState(isCurrentUserProfile);

    const handleFollowUnfollowUser = async (userId) => {
        setFollowed((prevFollowed) => !prevFollowed);
        if (!followed) {
            await customFetch.post("/followers/followUser", { followedUserId: userId });
        } else {
            await customFetch.post("/followers/unfollowUser", { followedUserId: userId });
        }
    };

    const location = useLocation();

    const { user } = location.state;

    const getYearSuffix = (year) => {
        switch (year) {
            case "1":
                return "1'st year";
            case "2":
                return "2'nd year";
            case "3":
                return "3'rd year";
            case "4":
                return "4'th year";
            default:
                return `${year} year`;
        }
    };

    const handleMessageUser = () => {
        navigate(`/messages/${user.username}`, { state: { user } });
    };

    return (
        <Wrapper>
            <img src={user.bannerImage} className="userBannerImage" alt="userBanner" />
            <div className="userProfileImageParent">
                <img src={user.profileImage} className="userProfileImage" alt="userProfileImage" />
            </div>
            <p className="userName">{user.fullName}</p>
            <div className="about">
                <p className="aboutUser">{user.university}</p>
                <p className="aboutUser">{user.profile}</p>
                <p className="aboutUser">{getYearSuffix(user.year)}</p>
            </div>
            <div className="buttons">
                {!currentUserProfile && (
                    <>
                        <div
                            onClick={() => handleFollowUnfollowUser(user._id)}
                            className={`button ${followed ? "unfollow" : "follow"}`}
                            id="followButton">
                            {followed ? "Unfollow" : "Follow"}
                        </div>
                        <div className="button" id="messageButton" onClick={handleMessageUser}>
                            Message
                        </div>
                    </>
                )}
                {currentUserProfile && (
                    <>
                        <div className="button" id="editProfileButton">
                            Edit Profile
                        </div>
                    </>
                )}
            </div>
        </Wrapper>
    );
};

export default UserProfilePage;
