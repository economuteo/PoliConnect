import React, { useState, useEffect, useRef } from "react";
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
    const navigate = useNavigate();

    const [post, setPost] = useState(eventPost);

    const [loading, setLoading] = useState(true);
    const [isApiCallInProgress, setIsApiCallInProgress] = useState(false);
    const [isApiCallInProgress2, setIsApiCallInProgress2] = useState(false);

    const [lastTap, setLastTap] = useState(0);

    const [isExpanded, setIsExpanded] = useState(false);
    const [showReadMore, setShowReadMore] = useState(false);

    const [isLiked, setIsLiked] = useState(false);
    const [isJoined, setIsJoined] = useState(false);

    const descriptionRef = useRef(null);

    const goToLikesPage = async (post) => {
        const response = await customFetch.post("/likes/getUsersThatLikedThePost", {
            postId: post._id,
            typeOfPost: post.typeOfPost,
        });

        const users = response.data;

        navigate("/likes", { state: { users } });
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
            } finally {
                setLoading(false);
            }
        };

        getLikeStatus();
    }, [post.likes]);

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

    // Extract and format the date
    const eventDate = new Date(eventPost.eventDate);
    const formattedDate = eventDate.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

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
            if (isJoined) {
                const response = await customFetch.post("/events/leaveEvent", {
                    eventId: post._id,
                });

                const leftEvent = response.data.event;
                setPost(leftEvent);
            } else {
                const response = await customFetch.post("/events/joinEvent", {
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

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        if (descriptionRef.current) {
            const { scrollHeight, clientHeight } = descriptionRef.current;
            if (scrollHeight > clientHeight) {
                setShowReadMore(true);
            }
        }
    }, []);

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
            <div className="postCreatorBasicInformation">
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
                    className={`joinNowButton ${isJoined ? "joined" : ""}`}
                    onClick={() => handleJoinUnjoin(post)}>
                    <p>{isJoined ? "Joined" : "Join Now"}</p>
                </div>
            </div>
            <div className="eventPostDescription">
                <span
                    id="descriptionSection"
                    className={isExpanded ? "expanded" : ""}
                    ref={descriptionRef}>
                    <span id="descriptionUserUsername">{post.userUsername}</span>
                    {post.eventDescription}
                </span>
                {!isExpanded && showReadMore && (
                    <button onClick={toggleReadMore} className="readMoreButton">
                        Read More
                    </button>
                )}
            </div>
            <div className="postReactions">
                <div className="reaction">
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
