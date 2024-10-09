import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/AccountCreatedPage";
import SuccessIcon from "../assets/images/success-icon.png";
import { AppContext } from "../contexts/AppContext";

const CongratsPage = () => {
    const navigate = useNavigate();
    const { setRemoveNavbar } = useContext(AppContext);
    const [isNavigating, setIsNavigating] = useState(false);

    useEffect(() => {
        setRemoveNavbar(true);

        return () => setRemoveNavbar(false);
    }, [setRemoveNavbar]);

    const handleClick = () => {
        if (!isNavigating) {
            setIsNavigating(true);
            navigate("/feed");
        }
    };

    return (
        <Wrapper>
            <img src={SuccessIcon} className="successIcon" alt="Success Icon" />
            <p className="title">Congrats!</p>
            <p className="shortDescription">Account Created Successfully</p>
            <button onClick={handleClick} disabled={isNavigating}>
                Get Started
            </button>
        </Wrapper>
    );
};

export default CongratsPage;
