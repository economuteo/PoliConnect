import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Email } from "../assets/images/email.svg";

import Wrapper from "../assets/wrappers/ForgetPasswordComponent";

const ForgetPasswordComponent = () => {
    const navigate = useNavigate();

    const [isSelected, setIsSelected] = useState(false);

    const handleEmailClick = () => {
        setIsSelected(!isSelected);
    };

    const handleNextClick = () => {
        if (isSelected) {
            navigate("/authentification/verifyEmail");
        }
    };

    return (
        <Wrapper>
            <p className="title">Forgotten Password</p>
            <p className="shortDescription">
                Select which contact details should we use to reset your password
            </p>
            <div className={`emailBox ${isSelected ? "selected" : ""}`} onClick={handleEmailClick}>
                <Email className="emailIcon" />
                <div className="emailBoxText">
                    <p className="emailBoxText1">Email</p>
                    <p className="emailBoxText2">Receive the code to your email</p>
                </div>
            </div>
            <button
                className={`${isSelected ? "buttonEnabled" : ""}`}
                onClick={handleNextClick}
                disabled={!isSelected}>
                Next
            </button>
        </Wrapper>
    );
};

export default ForgetPasswordComponent;
