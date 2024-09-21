import { useRef, useState } from "react";
import LoveIcon from "../assets/images/love-icon.png";
import CommentsIcon from "../assets/images/comments-icon.png";
import ShareIcon from "../assets/images/share-icon.png";
import Wrapper from "../assets/wrappers/PhotoPostComponent";
import customFetch from "../utils/customFetch";

const PhotoPostComponent = ({ photoPost }) => {
    const [post, setPost] = useState(photoPost);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showReadMore, setShowReadMore] = useState(false);
    const [lastTap, setLastTap] = useState(0);
    const descriptionRef = useRef(null);

    const handleDoubleClick = async (post) => {
        try {
            const response = await customFetch.post("/likes/likePost", {
                postId: post._id,
                typeOfPost: post.typeOfPost,
            });
            const likedPost = response.data.post;
            setPost(likedPost);
        } catch (err) {
            console.error("Error fetching specific post:", err.message);
        }
    };

    const handleTouch = (postId) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;

        if (tapLength < 500 && tapLength > 0) {
            handleDoubleClick(postId);
        }

        setLastTap(currentTime);
    };

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Wrapper onDoubleClick={() => handleDoubleClick(post)} onTouchEnd={() => handleTouch(post)}>
            <div className="postCreatorBasicInformation">
                <img id="userProfileImage" src={post.userProfileImage} alt="" />
                <p id="userUsername">{post.userUsername}</p>
            </div>
            <div className="postContent">
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
                    <img src={LoveIcon} alt="" />
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
