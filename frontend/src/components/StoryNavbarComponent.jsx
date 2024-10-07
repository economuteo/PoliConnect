import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/StoryNavbarComponent";

const StoryNavbarComponent = () => {
    const navigate = useNavigate();
    const [isNavigating, setIsNavigating] = useState(false);

    const handleClose = () => {
        if (isNavigating) return;

        setIsNavigating(true);
        navigate("/feed");
    };

    return (
        <Wrapper>
            <span className="closeButton" onClick={handleClose}></span>
            <p className="title">Add to story</p>
            <p></p>
        </Wrapper>
    );
};

export default StoryNavbarComponent;
