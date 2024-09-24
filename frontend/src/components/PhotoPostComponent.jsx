import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LikeIconComponent } from "../components";

import CommentsIcon from "../assets/images/comments-icon.png";
import ShareIcon from "../assets/images/share-icon.png";

import customFetch from "../utils/customFetch";

import Wrapper from "../assets/wrappers/PhotoPostComponent";
import { ClipLoader } from "react-spinners";

const PhotoPostComponent = ({ photoPost }) => {
    const [post, setPost] = useState(photoPost);

    const [loading, setLoading] = useState(true);
    const [isApiCallInProgress, setIsApiCallInProgress] = useState(false);

    const [lastTap, setLastTap] = useState(0);

    const [showReadMore, setShowReadMore] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const [isLiked, setIsLiked] = useState(false);

    const descriptionRef = useRef(null);
    const navigate = useNavigate();

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

    const handleTouch = (post) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;

        if (tapLength < 500 && tapLength > 0) {
            handleDoubleClick(post);
        }

        setLastTap(currentTime);
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
            <div
                className="postContent"
                onDoubleClick={() => handleDoubleClick(post)}
                onTouchEnd={() => handleTouch(post)}>
                <img id="photo" src={post.mediaUrl} alt="" />
            </div>
            <div className="postDescription">
                {post.description && (
                    <span
                        id="descriptionSection"
                        className={isExpanded ? "expanded" : ""}
                        ref={descriptionRef}>
                        <span id="descriptionUserUsername">{post.userUsername}</span>
                        {post.description}
                    </span>
                )}
                {!isExpanded && showReadMore && (
                    <button onClick={toggleReadMore} className="readMoreButton">
                        Read More
                    </button>
                )}
            </div>
            <div className="postReactions">
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

export default PhotoPostComponent;
