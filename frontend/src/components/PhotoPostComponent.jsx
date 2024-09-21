import { useRef, useState } from "react";
import LoveIcon from "../assets/images/love-icon.png";
import CommentsIcon from "../assets/images/comments-icon.png";
import ShareIcon from "../assets/images/share-icon.png";
import Wrapper from "../assets/wrappers/PhotoPostComponent";

const PhotoPostComponent = ({ photoPost, onDoubleClick, onTouch }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showReadMore, setShowReadMore] = useState(false);
    const descriptionRef = useRef(null);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Wrapper onTouchEnd={onTouch} onDoubleClick={onDoubleClick}>
            <div className="postCreatorBasicInformation">
                <img id="userProfileImage" src={photoPost.userProfileImage} alt="" />
                <p id="userUsername">{photoPost.userUsername}</p>
            </div>
            <div className="photoPostContent">
                <img id="photo" src={photoPost.mediaUrl} alt="" />
            </div>
            <div className="photoPostDescription">
                {photoPost.description && (
                    <span
                        id="descriptionSection"
                        className={isExpanded ? "expanded" : ""}
                        ref={descriptionRef}>
                        <span id="descriptionUserUsername">{photoPost.userUsername}</span>
                        {photoPost.description}
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
                    <p>{photoPost.likes.length}</p>
                </div>
                <div className="reaction">
                    <img src={CommentsIcon} alt="" />
                    <p>{photoPost.comments.length}</p>
                </div>
                <img src={ShareIcon} alt="" />
            </div>
        </Wrapper>
    );
};

export default PhotoPostComponent;
