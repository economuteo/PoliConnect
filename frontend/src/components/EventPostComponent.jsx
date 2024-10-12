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

    const [loading, setLoading] = useState(true);
    const [isApiCallInProgress, setIsApiCallInProgress] = useState(false);
    const [isApiCallInProgress2, setIsApiCallInProgress2] = useState(false);

    const [lastTap, setLastTap] = useState(0);

    const [showReadMore, setShowReadMore] = useState(false);

    const [isLiked, setIsLiked] = useState(false);
    const [hasJoined, setHasJoined] = useState(false);

    // Extract and format the date
    const eventDate = new Date(eventPost.eventDate);
    const formattedDate = eventDate.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    const handleNavigateToUserProfile = async () => {
        if (navigatedOk) return;

        try {
            setNavigatedOk(true);
            const response = await customFetch.post(`/users/getSpecificUserByUsername`, {
                username: post.userUsername,
            });
            const specificUser = response.data.user;

            navigate(`userProfile/${post.userUsername}`, { state: { user: specificUser } });
        } catch (error) {
            setNavigatedOk(false);
        }
    };

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
            }
        };

        getLikeStatus();
    }, [post.likes]);

    useEffect(() => {
        const getJoinStatus = async () => {
            try {
                const response = await customFetch.post("/participants/checkJoinedStatus", {
                    post,
                });

                const hasJoined = response.data;

                setHasJoined(hasJoined);
            } catch (err) {
                console.error("Error fetching join status:", err.message);
            } finally {
                setLoading(false);
            }
        };

        getJoinStatus();
    }, [post.participants]);

    const handleDoubleClick = async (post) => {
        if (isApiCallInProgress) return;

        setIsApiCallInProgress(true);

        try {
            const response = await customFetch.post("/likes/likePost", {
                postId: post._id,
                typeOfPost: post.typeOfPost,
            });

            const likedPost = response.data.post;
            setPost(likedPost);
        } catch (err) {
            console.error("Error fetching specific post:", err.message);
        } finally {
            setIsApiCallInProgress(false);
        }
    };

    const handleTouch = (post) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;

        if (tapLength < 500 && tapLength > 0) {
            handleDoubleClick(post);
        }

        setLastTap(currentTime);
    };

    const handleJoinUnjoin = async (post) => {
        if (isApiCallInProgress2) return;

        setIsApiCallInProgress2(true);

        try {
            if (hasJoined) {
                const response = await customFetch.post("/participants/leaveEvent", {
                    eventId: post._id,
                });

                const leftEvent = response.data.event;
                setPost(leftEvent);
            } else {
                const response = await customFetch.post("/participants/joinEvent", {
                    eventId: post._id,
                });

                const joinedEvent = response.data.event;
                setPost(joinedEvent);
            }
        } catch (err) {
            console.error("Error fetching specific post:", err.message);
        } finally {
            setIsApiCallInProgress2(false);
        }
    };

    const handleLikeUnlike = async (post) => {
        if (isApiCallInProgress) return;

        setIsApiCallInProgress(true);

        try {
            if (isLiked) {
                const response = await customFetch.post("/likes/unlikePost", {
                    postId: post._id,
                    typeOfPost: post.typeOfPost,
                });

                const unlikedPost = response.data.post;
                setPost(unlikedPost);
            } else {
                const response = await customFetch.post("/likes/likePost", {
                    postId: post._id,
                    typeOfPost: post.typeOfPost,
                });

                const likedPost = response.data.post;
                setPost(likedPost);
            }
        } catch (err) {
            console.error("Error fetching specific post:", err.message);
        } finally {
            setIsApiCallInProgress(false);
        }
    };

    const goToLikesPage = async (post) => {
        const response = await customFetch.post("/likes/getUsersThatLikedThePost", {
            postId: post._id,
            typeOfPost: post.typeOfPost,
        });

        const users = response.data;

        navigate("/likes", { state: { users } });
    };

    const goToParticipantsPage = async (post) => {
        const response = await customFetch.post("/participants/getUsersWhoJoined", {
            post,
        });

        const participants = response.data;

        navigate("/participants", { state: { participants } });
    };

    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}>
                <ClipLoader color="#ffffff" size={150} />
            </div>
        );
    }

    return (
        <Wrapper>
            <div
                className="postCreatorBasicInformation"
                onClick={() => handleNavigateToUserProfile()}>
                <img id="userProfileImage" src={post.userProfileImage} alt="" />
                <p id="userUsername">{post.userUsername}</p>
            </div>
            <div className="eventPostContent">
                <div
                    onDoubleClick={() => handleDoubleClick(post)}
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
                <div
                    className={`joinNowButton ${hasJoined ? "joined" : ""}`}
                    onClick={() => handleJoinUnjoin(post)}>
                    <p>{hasJoined ? "Joined" : "Join Now"}</p>
                </div>
            </div>
            {post.eventDescription && (
                <div className="eventPostDescription">
                    <span id="descriptionSection">
                        <span id="descriptionUserUsername">{post.userUsername}</span>
                        {post.eventDescription}
                    </span>
                </div>
            )}
            <div className="postReactions">
                <div className="reaction" onClick={() => goToParticipantsPage(post)}>
                    <img src={ParticipantsIcon} alt="" />
                    <p>{post.participants.length}</p>
                </div>
                <div className="reaction">
                    <div onClick={() => handleLikeUnlike(post)}>
                        <LikeIconComponent fill={isLiked ? "#0677E8" : ""} />
                    </div>
                    <p onClick={() => goToLikesPage(post)}>{post.likes.length}</p>
                </div>
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
