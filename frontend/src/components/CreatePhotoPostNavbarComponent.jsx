import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Wrapper from "../assets/wrappers/CreatePhotoPostNavbarComponent.js";

import { AppContext } from "../contexts/AppContext";

import AddTextIcon from "../assets/images/add-text-icon.png";

const CreatePhotoPostNavbarComponent = () => {
    const { setIsTextVisible } = useContext(AppContext);

    const navigate = useNavigate();
    const [isInitialNavVisible, setIsInitialNavVisible] = useState(true);

    const handleClose = () => {
        navigate(-1);
    };

    const handleAddText = () => {
        setIsInitialNavVisible(!isInitialNavVisible);
        setIsTextVisible(true);
    };

    return (
        <Wrapper className="container">
            <div className={`initialNav ${isInitialNavVisible ? "fade-in" : "fade-out"}`}>
                <span className="closeButton" onClick={handleClose}></span>
                <p></p>
            </div>
        </Wrapper>
    );
};

export default CreatePhotoPostNavbarComponent;
