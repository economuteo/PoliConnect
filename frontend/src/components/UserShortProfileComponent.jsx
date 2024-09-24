import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/UserShortProfileComponent";

const UserShortProfileComponent = ({ user }) => {
    const [isFollowed, setIsFollowed] = useState(user.isFollowed);

    const navigate = useNavigate();

    const handleFollowUnfollowUser = async (userId) => {
        if (!isFollowed) {
            await customFetch.post("/followers/followUser", { followedUserId: userId });
            setIsFollowed(true);
        } else {
            await customFetch.post("/followers/unfollowUser", { followedUserId: userId });
            setIsFollowed(false);
        }
    };

    const handleSeeUserProfile = (user) => {
        navigate(`/feed/userProfile/${user.username}`, { state: { user } });
    };

    return (
        <Wrapper>
            <div className="user">
                <div className="seeUserProfile" onClick={() => handleSeeUserProfile(user)}>
                    <img src={user.profileImage} className="userProfileImage" alt="userImage" />
                    <p className="userName">{user.username}</p>
                </div>
                <button className="followButton" onClick={() => handleFollowUnfollowUser(user._id)}>
                    {isFollowed ? "Followed" : "Follow"}
                </button>
            </div>
        </Wrapper>
    );
};

export default UserShortProfileComponent;
