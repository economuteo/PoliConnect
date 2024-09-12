import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../contexts/AppContext";

import cameraIcon from "../assets/images/camera-icon.png";
import draftIcon from "../assets/images/draft-icon.png";
import galleryIcon from "../assets/images/gallery-icon.png";

import Wrapper from "../assets/wrappers/AddStoryComponent";

import { isTouchDevice } from "../utils/touchSupport";

const AddStoryComponent = () => {
    const fileInputRef = useRef(null);
    const galleryInputRef = useRef(null);
    const [supportsTouch, setSupportsTouch] = useState(isTouchDevice());
    const [selectedImage, setSelectedImage] = useState(null);
    const { setFile } = useContext(AppContext);
    const navigate = useNavigate();

    const handleCameraClick = () => {
        fileInputRef.current.click();
    };

    const handleGalleryClick = () => {
        if (supportsTouch) {
            galleryInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            navigate("/story/addStory", { state: { imageUrl } });
        }
    };

    return (
        <Wrapper className="container">
            <div className="options">
                {supportsTouch && (
                    <div className="option" id="camera" onClick={handleCameraClick}>
                        <input
                            type="file"
                            accept="image/*"
                            capture="environment"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />
                        <img className="optionImage" src={cameraIcon} alt="Camera" />
                        <p className="optionDescription">Camera</p>
                    </div>
                )}

                {supportsTouch && (
                    <div className="option" id="drafts">
                        <img className="optionImage" src={draftIcon} alt="Add story" />
                        <p className="optionDescription">Drafts</p>
                    </div>
                )}

                <div className="option" id="gallery" onClick={handleGalleryClick}>
                    <input
                        type="file"
                        accept="image/*"
                        ref={galleryInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                    <img className="optionImage" src={galleryIcon} alt="Gallery" />
                    <p className="optionDescription">Gallery</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default AddStoryComponent;
