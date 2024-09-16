import { useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";

import Wrapper from "../assets/wrappers/UserProfileComponent";

import customFetch from "../utils/customFetch";

export const isUserFollowedLoader = async ({ params }) => {
    const { username } = params;
    const response = await customFetch.post(`/followers/isUserFollowed?username=${username}`);
    const isFollowing = response.data.isFollowing;
    return isFollowing;
};

const UserProfilePage = () => {
    const [followed, setFollowed] = useState(useLoaderData());

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
                <div
                    onClick={() => handleFollowUnfollowUser(user._id)}
                    className={`button ${followed ? "unfollow" : "follow"}`}
                    id="followButton">
                    {followed ? "Unfollow" : "Follow"}
                </div>
                <div className="button" id="messageButton">
                    Message
                </div>
            </div>
        </Wrapper>
    );
};

export default UserProfilePage;
