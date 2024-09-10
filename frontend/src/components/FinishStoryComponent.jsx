import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";

import { AppContext } from "../contexts/AppContext";

import Wrapper from "../assets/wrappers/FinishStoryComponent";

const FinishStoryComponent = () => {
    const location = useLocation();
    const { imageUrl } = location.state || {};
    const { setImageUrl } = useContext(AppContext);

    useEffect(() => {
        if (imageUrl) {
            setImageUrl(imageUrl);
        }
    }, []);

    return (
        <Wrapper>
            <div>
                {imageUrl ? (
                    <img className="story" src={imageUrl} alt="Selected" />
                ) : (
                    <p>No image selected</p>
                )}
            </div>
        </Wrapper>
    );
};

export default FinishStoryComponent;
