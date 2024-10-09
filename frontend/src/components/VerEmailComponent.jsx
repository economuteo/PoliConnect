import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import ReactCodeInput from "react-code-input";

import { toast } from "react-toastify";

import { AppContext } from "../contexts/AppContext";

import useCountdownTimer from "../customHooks/useCountdownTimer";

import customFetch from "../utils/customFetch";

import Wrapper from "../assets/wrappers/VerPhoneNumComponent";

const VerEmailComponent = () => {
    const [isVeryfing, setIsVeryfing] = useState(false);
    const [wasVerified, setWasVerified] = useState(false);
    const [myCode, setMyCode] = useState("");

    const { timeLeft, formatTime, expired, resetTimer } = useCountdownTimer(300);

    const navigate = useNavigate();

    const { comingFrom } = useContext(AppContext);

    const handleVerify = async () => {
        try {
            setIsVeryfing(true);

            // Verify the email code
            await customFetch.post("/auth/verifyEmailCode", { myCode: myCode });
            setWasVerified(true);

            // Navigate based on what is needed
            switch (comingFrom) {
                case "forgotPassword":
                    navigate("/authentification/resetPassword");
                    break;
                case "register":
                    await customFetch.get("/auth/registerFinal");
                    navigate("/authentification/saveAdditionalInfo");
                    break;
                default:
                    navigate("/authentification");
                    break;
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
            setIsVeryfing(false);
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
                <button
                    className="buttons verify"
                    onClick={handleVerify}
                    disabled={isVeryfing || wasVerified}>
                    {!isVeryfing ? "Verify" : "Verifying..."}
                </button>
                <button className="buttons send" onClick={handleSendAgain}>
                    Send Again
                </button>
            </div>
        </Wrapper>
    );
};

export default VerEmailComponent;
