import { useNavigate } from "react-router-dom";

import Wrapper from "../assets/wrappers/StoryNavbarComponent";

const StoryNavbarComponent = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate(-1);
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
