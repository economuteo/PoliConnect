import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AddTextIcon from "../assets/images/add-text-icon.png";

import Wrapper from "../assets/wrappers/FinishStoryNavbarComponent.js";

const FinishStoryNavbarComponent = () => {
    const navigate = useNavigate();
    const [isInitialNavVisible, setIsInitialNavVisible] = useState(true);

    const handleClose = () => {
        navigate(-1);
    };

    const handleAddText = () => {
        setIsInitialNavVisible(!isInitialNavVisible);
    };

    return (
        <Wrapper className="container">
            <div className={`initialNav ${isInitialNavVisible ? "fade-in" : "fade-out"}`}>
                <span className="closeButton" onClick={handleClose}></span>
                <img className="addTextButton" src={AddTextIcon} onClick={handleAddText}></img>
            </div>
            <div className={`editTextNav ${isInitialNavVisible ? "fade-out" : "fade-in"}`}>
                <p onClick={handleAddText}>Done</p>
            </div>
        </Wrapper>
    );
};

export default FinishStoryNavbarComponent;
