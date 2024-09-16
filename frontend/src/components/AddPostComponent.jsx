import { useNavigate } from "react-router-dom";

import EventIcon from "../assets/images/event-icon.png";
import CameraIcon from "../assets/images/camera-icon.png";

import Wrapper from "../assets/wrappers/AddPostComponent";

const AddPostComponent = () => {
    const navigate = useNavigate();

    const handleCreateEventClick = () => {
        navigate("/event/createEvent");
    };

    return (
        <Wrapper>
            <div className="options">
                <div className="option">
                    <img src={CameraIcon} className="eventIcon" alt="Calendar" />
                    <p>Add photo</p>
                </div>
                <div className="option" onClick={handleCreateEventClick}>
                    <img src={EventIcon} className="eventIcon" alt="Calendar" />
                    <p>Create Event</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default AddPostComponent;
