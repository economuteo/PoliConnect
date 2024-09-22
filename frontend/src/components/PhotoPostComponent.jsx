import { useRef, useState } from "react";
import LikeIcon from "../assets/images/like-icon.svg";
import CommentsIcon from "../assets/images/comments-icon.png";
import ShareIcon from "../assets/images/share-icon.png";
import Wrapper from "../assets/wrappers/PhotoPostComponent";
import customFetch from "../utils/customFetch";

const PhotoPostComponent = ({ photoPost }) => {
    const [post, setPost] = useState(photoPost);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showReadMore, setShowReadMore] = useState(false);
    const [lastTap, setLastTap] = useState(0);
    const [wasLiked, setWasLiked] = useState(false);
    const descriptionRef = useRef(null);

    // Passing the logic fast
    const handleDoubleClick = async (post) => {
        if (!wasLiked) {
            setWasLiked(true);
            try {
                const response = await customFetch.post("/likes/likePost", {
                    postId: post._id,
                    typeOfPost: post.typeOfPost,
                });

                if (response.data.post) {
                    const likedPost = response.data.post;
                    setPost(likedPost);
                } else {
                    setWasLiked(false);
                }
            } catch (err) {
                console.error("Error fetching specific post:", err.message);
            }
        }
    };

    // Tricky timer here
    const handleTouch = (post) => {
        if (!wasLiked) {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;

            if (tapLength < 500 && tapLength > 0) {
                handleDoubleClick(post);
            }

            setLastTap(currentTime);
        }
    };

    const handleUnlike = async (post) => {
        if (wasLiked) {
            try {
                const response = await customFetch.post("/likes/unlikePost", {
                    postId: post._id,
                    typeOfPost: post.typeOfPost,
                });
                const unlikedPost = response.data.post;
                setPost(unlikedPost);
                setWasLiked(false);
            } catch (err) {
                console.error("Error fetching specific post:", err.message);
            }
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
                <div className="reaction" onClick={() => handleUnlike(post)}>
                    <img src={LikeIcon} alt="" />
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
