import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ReactCodeInput from "react-code-input";

import { toast } from "react-toastify";

import useCountdownTimer from "../customHooks/useCountdownTimer";

import customFetch from "../utils/customFetch";

import Wrapper from "../assets/wrappers/VerPhoneNumComponent";

const VerEmailComponent = () => {
    const [myCode, setMyCode] = useState("");

    const { timeLeft, formatTime, expired, resetTimer } = useCountdownTimer(300);

    const navigate = useNavigate();

    const handleVerify = async () => {
        try {
            await customFetch.post("/auth/verifyEmailCode", { myCode: myCode });
            navigate("/authentification/resetPassword");
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
        }
    };

    const handleSendAgain = async () => {
        try {
            await customFetch.post("/auth/resendEmailCode");
            toast.success("Verification code sent successfully! Please check your email again");
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
        }
        resetTimer();
    };

    return (
        <Wrapper>
            <p className="title">Verify Email</p>
            <p className="shortDesc">Please enter the code we've sent to your email</p>
            <ReactCodeInput
                type="password"
                fields={4}
                onChange={(myCode) => {
                    setMyCode(myCode);
                }}
            />
            <p className="timer">
                {expired ? "The time has expired!" : `(${formatTime(timeLeft)})`}
            </p>
            <div className="buttonsPart">
                <button className="buttons verify" onClick={handleVerify}>
                    Verify
                </button>
                <button className="buttons send" onClick={handleSendAgain}>
                    Send Again
                </button>
            </div>
        </Wrapper>
    );
};

export default VerEmailComponent;
