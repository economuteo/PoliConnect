import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners"; // Import the spinner

import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/UserShortProfileComponent";

const UserShortProfileComponent = ({ user }) => {
    const [isFollowed, setIsFollowed] = useState(false);
    const [isCurrentUser, setIsCurrentUser] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isApiCalling, setIsApiCalling] = useState(false);

    useEffect(() => {
        const checkIfUserIsFollowed = async () => {
            try {
                const username = user.username;

                const response = await customFetch.post(
                    `/followers/isUserFollowed?username=${username}`
                );
                const isFollowed = response.data.following;
                setIsFollowed(isFollowed);
                
                const secondResponse = await customFetch.post("/users/isCurrentUser", {
                    userId: user._id,
                });
                const isCurrentUser = secondResponse.data.isCurrentUser;
                setIsCurrentUser(isCurrentUser);
            } catch (error) {
                console.error("Error checking if user is followed:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (user && user.username) {
            checkIfUserIsFollowed();
        } else {
            setIsLoading(false);
        }
    }, [user]);

    const navigate = useNavigate();

    const handleFollowUnfollowUser = async (userId) => {
        setIsApiCalling(true);
        try {
            if (!isFollowed) {
                await customFetch.post("/followers/followUser", { followedUserId: userId });
                setIsFollowed(true);
            } else {
                await customFetch.post("/followers/unfollowUser", { followedUserId: userId });
                setIsFollowed(false);
            }
        } catch (error) {
            console.error("Error following/unfollowing user:", error);
        } finally {
            setIsApiCalling(false);
        }
    };

    const handleSeeUserProfile = (user) => {
        navigate(`/feed/userProfile/${user.username}`, { state: { user } });
    };

    if (isLoading) {
        return (
            <div className="spinner-container">
                <ClipLoader size={50} color={"#123abc"} loading={isLoading} />
            </div>
        );
    }

    return (
        <Wrapper>
            <div className="user">
                <div className="seeUserProfile" onClick={() => handleSeeUserProfile(user)}>
                    <img src={user.profileImage} className="userProfileImage" alt="userImage" />
                    <p className="userName">{user.username}</p>
                </div>
                {!isCurrentUser && <button
                    className={`followButton ${isFollowed ? "followed" : ""}`}
                    onClick={() => handleFollowUnfollowUser(user._id)}
                    disabled={isApiCalling}>
                    {isFollowed ? "Following" : "Follow"}
                </button>}
            </div>
        </Wrapper>
    );
};

export default UserShortProfileComponent;
