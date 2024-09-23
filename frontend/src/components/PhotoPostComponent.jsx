import { useRef, useState } from "react";
import { LikeIconComponent } from "../components";

import CommentsIcon from "../assets/images/comments-icon.png";
import ShareIcon from "../assets/images/share-icon.png";

import customFetch from "../utils/customFetch";

import Wrapper from "../assets/wrappers/PhotoPostComponent";

const PhotoPostComponent = ({ photoPost }) => {
    const [post, setPost] = useState(photoPost);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showReadMore, setShowReadMore] = useState(false);
    const [lastTap, setLastTap] = useState(0);
    const [isApiCallInProgress, setIsApiCallInProgress] = useState(false);
    const descriptionRef = useRef(null);

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

export default PhotoPostComponent;
