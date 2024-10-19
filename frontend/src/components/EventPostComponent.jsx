import React, { useState, useEffect } from "react";
import { LikeIconComponent } from "../components";

import DateIcon from "../assets/images/date-icon.png";
import TimeIcon from "../assets/images/time-icon.png";
import LocationIcon from "../assets/images/location-icon.png";
import ParticipantsIcon from "../assets/images/participants-icon.png";
import CommentsIcon from "../assets/images/comments-icon.png";
import ShareIcon from "../assets/images/share-icon.png";
import Wrapper from "../assets/wrappers/EventPostComponent";
import customFetch from "../utils/customFetch";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const EventPostComponent = ({ eventPost }) => {
    const [navigatedOk, setNavigatedOk] = useState(false);

    const navigate = useNavigate();

    const [post, setPost] = useState(eventPost);

    const [userInfoLoading, setUserInfoLoading] = useState(true);
    const [likesLoading, setLikesLoading] = useState(true);
    const [participantsLoading, setParticipantsLoading] = useState(true);

    const [lastTap, setLastTap] = useState(0);

    const [isLiked, setIsLiked] = useState(false);
    const [hasJoined, setHasJoined] = useState(false);

    const [postLikes, setPostLikes] = useState(eventPost.likes.length);
    const [postParticipants, setPostParticipants] = useState(eventPost.participants.length);

    // Extract and format the date
    const eventDate = new Date(eventPost.eventDate);
    const formattedDate = eventDate.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    useEffect(() => {
        const getPostUser = async () => {
            try {
                const response = await customFetch.post("/users/specificUserByID", {
                    userId: post.createdBy,
                });

                const specificUser = response.data.user;

                setPost({
                    ...post,
                    specificUsername: specificUser.username,
                    specificProfileImage: specificUser.profileImage,
                });
            } catch (err) {
                console.error("Error fetching specific user:", err.message);
            } finally {
                setUserInfoLoading(false);
            }
        };

        getPostUser();
    }, []);

    useEffect(() => {
        const getLikeStatus = async () => {
            try {
                const response = await customFetch.post("/likes/checkLikeStatus", {
                    postId: post._id,
                    typeOfPost: post.typeOfPost,
                });

                const isLiked = response.data;

                setIsLiked(isLiked);
            } catch (err) {
                console.error("Error fetching like status:", err.message);
            } finally {
                setLikesLoading(false);
            }
        };

        getLikeStatus();
    }, []);

    useEffect(() => {
        const getJoinStatus = async () => {
            try {
                const response = await customFetch.post("/participants/checkJoinedStatus", {
                    post,
                });

                const hasJoined = response.data;

                setHasJoined(hasJoined);
            } catch (err) {
            } finally {
                setParticipantsLoading(false);
            }
        };

        getJoinStatus();
    }, []);

    const handleJoinUnjoin = async (post) => {
        if (hasJoined) {
            try {
                setHasJoined(false);
                setPostParticipants(postParticipants - 1);

                await customFetch.post("/participants/leaveEvent", {
                    eventId: post._id,
                });
            } catch (err) {
                setHasJoined(true);
                setPostParticipants(postParticipants + 1);
            }
        } else {
            try {
                setHasJoined(true);
                setPostParticipants(postParticipants + 1);

                await customFetch.post("/participants/joinEvent", {
                    eventId: post._id,
                });
            } catch (err) {
                setHasJoined(false);
                setPostParticipants(postParticipants - 1);
            }
        }
    };

    const handleLike = async (post) => {
        try {
            setIsLiked(true);
            setPostLikes(postLikes + 1);

            await customFetch.post("/likes/likePost", {
                postId: post._id,
                typeOfPost: post.typeOfPost,
            });
        } catch (err) {
            setIsLiked(false);
            setPostLikes(postLikes - 1);
        }
    };

    const handleLikeUnlike = async (post) => {
        if (isLiked) {
            try {
                setIsLiked(false);
                setPostLikes(postLikes - 1);

                await customFetch.post("/likes/unlikePost", {
                    postId: post._id,
                    typeOfPost: post.typeOfPost,
                });
            } catch (err) {
                setIsLiked(true);
                setPostLikes(postLikes + 1);
            }
        } else {
            try {
                setIsLiked(true);
                setPostLikes(postLikes + 1);

                await customFetch.post("/likes/likePost", {
                    postId: post._id,
                    typeOfPost: post.typeOfPost,
                });
            } catch (err) {
                setIsLiked(false);
                setPostLikes(postLikes - 1);
            }
        }
    };

    // Mobile logic
    const handleTouch = (post) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;

        if (tapLength < 500 && tapLength > 0) {
            if (!isLiked) {
                handleLike(post);
            }
        }

        setLastTap(currentTime);
    };

    // Navigation logic
    const handleNavigateToUserProfile = async (post) => {
        if (navigatedOk) return;

        try {
            setNavigatedOk(true);
            const response = await customFetch.post(`/users/getSpecificUserByUsername`, {
                username: post.specificUsername,
            });
            const specificUser = response.data.user;

            navigate(`userProfile/${post.specificUsername}`, { state: { user: specificUser } });
        } catch (error) {
            setNavigatedOk(false);
        }
    };

    const goToParticipantsPage = async (post) => {
        const response = await customFetch.post("/participants/getUsersWhoJoined", {
            post,
        });

        const participants = response.data;

        navigate("/participants", { state: { participants } });
    };

    const goToLikesPage = async (eventPost) => {
        const response = await customFetch.post("/likes/getUsersThatLikedThePost", {
            postId: eventPost._id,
            typeOfPost: eventPost.typeOfPost,
        });

        const users = response.data;

        navigate("/likes", { state: { users } });
    };

    return (
        <Wrapper>
            {userInfoLoading ? (
                <ClipLoader color="#0677E8" loading={userInfoLoading} size={35} />
            ) : (
                <div
                    className="postCreatorBasicInformation"
                    onClick={() => handleNavigateToUserProfile(post)}>
                    <img id="userProfileImage" src={post.specificProfileImage} alt="" />
                    <p id="userUsername">{post.specificUsername}</p>
                </div>
            )}

            <div className="eventPostContent">
                <div
                    onDoubleClick={() => {
                        if (!isLiked) {
                            handleLike(post);
                        }
                    }}
                    onTouchEnd={() => handleTouch(post)}>
                    <p id="eventName">{post.eventName}</p>
                    <div className="eventDetails">
                        <div className="eventDetail">
                            <img id="icons" src={DateIcon} alt="" />
                            <p>{formattedDate}</p>
                        </div>
                        <div className="eventDetail">
                            <img id="icons" src={TimeIcon} alt="" />
                            <p>{post.eventTime}</p>
                        </div>
                        <div className="eventDetail">
                            <img id="icons" src={LocationIcon} alt="" />
                            <p>{post.eventLocation}</p>
                        </div>
                    </div>
                </div>
                {participantsLoading ? (
                    <ClipLoader color="#0677E8" loading={userInfoLoading} size={35} />
                ) : (
                    <div
                        className={`joinNowButton ${hasJoined ? "joined" : ""}`}
                        onClick={() => handleJoinUnjoin(post)}>
                        <p>{hasJoined ? "Joined" : "Join Now"}</p>
                    </div>
                )}
            </div>
            {eventPost.description && (
                <div className="eventPostDescription">
                    <span id="descriptionSection">
                        <span id="descriptionUserUsername">{post.specificUsername}</span>
                        {eventPost.description}
                    </span>
                </div>
            )}
            <div className="postReactions">
                {participantsLoading ? (
                    <ClipLoader color="#0677E8" loading={userInfoLoading} size={35} />
                ) : (
                    <div className="reaction" onClick={() => goToParticipantsPage(eventPost)}>
                        <img src={ParticipantsIcon} alt="" />
                        <p>{[postParticipants]}</p>
                    </div>
                )}
                {likesLoading ? (
                    <ClipLoader color="#0677E8" loading={userInfoLoading} size={35} />
                ) : (
                    <div className="reaction">
                        <div onClick={() => handleLikeUnlike(post)}>
                            <LikeIconComponent fill={isLiked ? "#0677E8" : ""} />
                        </div>
                        <p onClick={() => goToLikesPage(eventPost)}>{postLikes}</p>
                    </div>
                )}
                <div className="reaction">
                    <img src={CommentsIcon} alt="" />
                    <p>{post.comments.length}</p>
                </div>
                <img src={ShareIcon} alt="" />
            </div>
        </Wrapper>
    );
};

export default EventPostComponent;
