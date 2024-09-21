import React, { useState, useEffect, useRef } from "react";
import DateIcon from "../assets/images/date-icon.png";
import TimeIcon from "../assets/images/time-icon.png";
import LocationIcon from "../assets/images/location-icon.png";
import ParticipantsIcon from "../assets/images/participants-icon.png";
import LoveIcon from "../assets/images/love-icon.png";
import CommentsIcon from "../assets/images/comments-icon.png";
import ShareIcon from "../assets/images/share-icon.png";
import Wrapper from "../assets/wrappers/EventPostComponent";

const EventPostComponent = ({ eventPost, onDoubleClick, onTouch }) => {
    const [isJoined, setIsJoined] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showReadMore, setShowReadMore] = useState(false);
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
        <Wrapper onTouchEnd={onTouch} onDoubleClick={onDoubleClick}>
            <div className="postCreatorBasicInformation">
                <img id="userProfileImage" src={eventPost.userProfileImage} alt="" />
                <p id="userUsername">{eventPost.userUsername}</p>
            </div>
            <div className="eventPostContent">
                <p id="eventName">{eventPost.eventName}</p>
                <div className="eventDetails">
                    <div className="eventDetail">
                        <img id="icons" src={DateIcon} alt="" />
                        <p>{formattedDate}</p>
                    </div>
                    <div className="eventDetail">
                        <img id="icons" src={TimeIcon} alt="" />
                        <p>{eventPost.eventTime}</p>
                    </div>
                    <div className="eventDetail">
                        <img id="icons" src={LocationIcon} alt="" />
                        <p>{eventPost.eventLocation}</p>
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
                    <span id="descriptionUserUsername">{eventPost.userUsername}</span>
                    {eventPost.eventDescription}
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
                    <p>{eventPost.participants.length}</p>
                </div>
                <div className="reaction">
                    <img src={LoveIcon} alt="" />
                    <p>{eventPost.likes.length}</p>
                </div>
                <div className="reaction">
                    <img src={CommentsIcon} alt="" />
                    <p>{eventPost.comments.length}</p>
                </div>
                <img src={ShareIcon} alt="" />
            </div>
        </Wrapper>
    );
};

export default EventPostComponent;
