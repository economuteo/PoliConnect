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

const EventPostComponent = ({ eventPost }) => {
    const [post, setPost] = useState(eventPost);
    const [isJoined, setIsJoined] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showReadMore, setShowReadMore] = useState(false);
    const [lastTap, setLastTap] = useState(0);
    const [isApiCallInProgress, setIsApiCallInProgress] = useState(false);
    const descriptionRef = useRef(null);

    // Extract and format the date
    const eventDate = new Date(eventPost.eventDate);
    const formattedDate = eventDate.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    const handleJoinClick = () => {
        setIsJoined(!isJoined);
    };

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

    const handleUnlike = async (post) => {
        if (isApiCallInProgress) return;

        setIsApiCallInProgress(true);
        try {
            const response = await customFetch.post("/likes/unlikePost", {
                postId: post._id,
                typeOfPost: post.typeOfPost,
            });

            const unlikedPost = response.data.post;
            setPost(unlikedPost);
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

    return (
        <Wrapper>
            <div className="postCreatorBasicInformation">
                <img id="userProfileImage" src={post.userProfileImage} alt="" />
                <p id="userUsername">{post.userUsername}</p>
            </div>
            <div
                className="eventPostContent"
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
                <div
                    className={`joinNowButton ${isJoined ? "joined" : ""}`}
                    onClick={handleJoinClick}>
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
                    <div onClick={() => handleUnlike(post)}>
                        <LikeIconComponent className="likeIcon" />
                    </div>
                    <p>{post.likes.length}</p>
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
