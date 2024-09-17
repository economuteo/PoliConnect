import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EventIcon from "../assets/images/event-icon.png";
import CameraIcon from "../assets/images/camera-icon.png";

import Wrapper from "../assets/wrappers/AddPostComponent";

const AddPostComponent = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const navigate = useNavigate();

    const handleCreateEventClick = () => {
        navigate("/event/createEvent");
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedPhoto(imageUrl);
            navigate("/photo/createPhotoPost", { state: { imageUrl } });
        }
    };

    return (
        <Wrapper>
            <div className="options">
                <div className="option">
                    <label htmlFor="fileInput" className="fileInputLabel">
                        <img src={CameraIcon} className="eventIcon" alt="Camera" />
                        <p>Add photo</p>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
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
