import { useRef, useState } from "react";
import Wrapper from "../assets/wrappers/PhotoPostComponent";

const PhotoPostComponent = ({ photoPost }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showReadMore, setShowReadMore] = useState(false);
    const descriptionRef = useRef(null);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Wrapper>
            <div className="postCreatorBasicInformation">
                <img id="userProfileImage" src={photoPost.userProfileImage} alt="" />
                <p id="userUsername">{photoPost.userUsername}</p>
            </div>
            <div className="photoPostContent">
                <img id="photo" src={photoPost.mediaUrl} alt="" />
            </div>
            <div className="photoPostDescription">
                <span
                    id="descriptionSection"
                    className={isExpanded ? "expanded" : ""}
                    ref={descriptionRef}>
                    <span id="descriptionUserUsername">{photoPost.userUsername}</span>
                    {photoPost.description}
                </span>
                {!isExpanded && showReadMore && (
                    <button onClick={toggleReadMore} className="readMoreButton">
                        Read More
                    </button>
                )}
            </div>
        </Wrapper>
    );
};

export default PhotoPostComponent;
