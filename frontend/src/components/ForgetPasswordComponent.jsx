import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Email } from "../assets/images/email.svg";

import Wrapper from "../assets/wrappers/ForgetPasswordComponent";

import { AppContext } from "../contexts/AppContext";

const ForgetPasswordComponent = () => {
    const { setComingFrom } = useContext(AppContext);
    setComingFrom("forgotPassword");

    const navigate = useNavigate();

    const [isSelected, setIsSelected] = useState(false);
    const [option, setOption] = useState(null);

    const handleEmailClick = () => {
        setIsSelected(!isSelected);
        setOption("email");
    };

    const handleNextClick = () => {
        if (isSelected) {
            navigate(`/authentification/${option}`);
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
