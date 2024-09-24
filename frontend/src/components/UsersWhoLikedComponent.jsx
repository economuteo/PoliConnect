import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "../assets/images/search-icon.png";

import Wrapper from "../assets/wrappers/UsersWhoLikedComponent";

import customFetch from "../utils/customFetch";

const UsersWhoLikedComponent = ({ users }) => {
    const navigate = useNavigate();

    const handleFollowUser = async (userId) => {
        await customFetch.post("/followers/followUser", { followedUserId: userId });
    };

    const handleSeeUserProfile = (user) => {
        navigate(`/feed/userProfile/${user.username}`, { state: { user } });
    };

    return (
        <Wrapper>
            {users.map((user) => (
                <div key={user._id} className="user">
                    <div className="seeUserProfile" onClick={() => handleSeeUserProfile(user)}>
                        <img src={user.profileImage} className="userProfileImage" alt="userImage" />
                        <p className="userName">{user.username}</p>
                    </div>
                    <button className="followButton" onClick={() => handleFollowUser(user._id)}>
                        {user.isFollowed ? "Unfollow" : "Follow"}
                    </button>
                </div>
            ))}
        </Wrapper>
    );
};

export default UsersWhoLikedComponent;
