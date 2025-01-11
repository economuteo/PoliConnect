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
    const [isLoading, setIsLoading] = useState(true);

    const [isLiked, setIsLiked] = useState(false);
    const [hasJoined, setHasJoined] = useState(false);

    const [postLikes, setPostLikes] = useState(eventPost.likes.length);
    const [postParticipants, setPostParticipants] = useState(eventPost.participants.length);
    const [lastTap, setLastTap] = useState(0);

    // Extract and format the date
    const eventDate = new Date(eventPost.eventDate);
    const formattedDate = eventDate.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const userPromise = customFetch.post("/users/specificUserByID", {
                    userId: post.createdBy,
                });

                const likePromise = customFetch.post("/likes/checkLikeStatus", {
                    postId: post._id,
                    typeOfPost: post.typeOfPost,
                });

                const joinPromise = customFetch.post("/participants/checkJoinedStatus", {
                    post,
                });

                // Fetch all data concurrently
                const [userResponse, likeResponse, joinResponse] = await Promise.all([
                    userPromise,
                    likePromise,
                    joinPromise,
                ]);

                // Update user information
                const specificUser = userResponse.data.user;
                setPost((prevPost) => ({
                    ...prevPost,
                    specificUsername: specificUser.username,
                    specificProfileImage: specificUser.profileImage,
                }));

                // Update like status
                setIsLiked(likeResponse.data);

                // Update join status
                setHasJoined(joinResponse.data);
            } catch (err) {
                console.error("Error fetching event post data:", err.message);
            } finally {
                setIsLoading(false); // Set loading to false after all data is fetched
            }
        };

        fetchAllData();
    }, [post._id, post.typeOfPost, post.createdBy]);

    const handleJoinUnjoin = async (post) => {
        if (hasJoined) {
            try {
                setHasJoined(false);
                setPostParticipants((prev) => prev - 1);

                await customFetch.post("/participants/leaveEvent", {
                    eventId: post._id,
                });
            } catch (err) {
                setHasJoined(true);
                setPostParticipants((prev) => prev + 1);
            }
        } else {
            try {
                setHasJoined(true);
                setPostParticipants((prev) => prev + 1);

                await customFetch.post("/participants/joinEvent", {
                    eventId: post._id,
                });
            } catch (err) {
                setHasJoined(false);
                setPostParticipants((prev) => prev - 1);
            }
        }
    };

    const handleLike = async (post) => {
        try {
            setIsLiked(true);
            setPostLikes((prev) => prev + 1);

            await customFetch.post("/likes/likePost", {
                postId: post._id,
                typeOfPost: post.typeOfPost,
            });
        } catch (err) {
            setIsLiked(false);
            setPostLikes((prev) => prev - 1);
        }
    };

    const handleLikeUnlike = async (post) => {
        if (isLiked) {
            try {
                setIsLiked(false);
                setPostLikes((prev) => prev - 1);

                await customFetch.post("/likes/unlikePost", {
                    postId: post._id,
                    typeOfPost: post.typeOfPost,
                });
            } catch (err) {
                setIsLiked(true);
                setPostLikes((prev) => prev + 1);
            }
        } else {
            try {
                setIsLiked(true);
                setPostLikes((prev) => prev + 1);

                await customFetch.post("/likes/likePost", {
                    postId: post._id,
                    typeOfPost: post.typeOfPost,
                });
            } catch (err) {
                setIsLiked(false);
                setPostLikes((prev) => prev - 1);
            }
        }
    };

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

    if (isLoading) {
        return (
            <Wrapper>
                <div id="clipLoaderWrapper">
                    <ClipLoader color="#0677E8" loading={isLoading} size={50} />
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <div
                className="postCreatorBasicInformation"
                onClick={() => handleNavigateToUserProfile(post)}>
                <img id="userProfileImage" src={post.specificProfileImage} alt="" />
                <p id="userUsername">{post.specificUsername}</p>
            </div>
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
                <div
                    className={`joinNowButton ${hasJoined ? "joined" : ""}`}
                    onClick={() => handleJoinUnjoin(post)}>
                    <p>{hasJoined ? "Joined" : "Join Now"}</p>
                </div>
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
                <div className="reaction" onClick={() => goToParticipantsPage(eventPost)}>
                    <img src={ParticipantsIcon} alt="" />
                    <p>{postParticipants}</p>
                </div>
                <div className="reaction">
                    <div onClick={() => handleLikeUnlike(post)}>
                        <LikeIconComponent fill={isLiked ? "#0677E8" : ""} />
                    </div>
                    <p onClick={() => goToLikesPage(eventPost)}>{postLikes}</p>
                </div>
                {/* <div className="reaction">
                    <img src={CommentsIcon} alt="" />
                    <p>{post.comments.length}</p>
                </div>
                <img src={ShareIcon} alt="" /> */}
            </div>
        </Wrapper>
    );
};

export default EventPostComponent;
