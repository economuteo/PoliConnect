import Wrapper from "../assets/wrappers/VerPhoneNumComponent";
import ReactCodeInput from "react-code-input";
import useCountdownTimer from "../customHooks/useCountdownTimer";

const VerPhoneNumComponent = () => {
    const { timeLeft, formatTime, expired, resetTimer } = useCountdownTimer(300);

    const handleSendAgain = () => {
        resetTimer();
    };

    return (
        <Wrapper>
            <p className="title">Verify Phone Number</p>
            <p className="shortDesc">Please enter the code we've sent to your phone number</p>
            <p className="phoneNum">The phone number that was sent</p>
            <ReactCodeInput type="number" fields={4} />
            <p className="timer">{expired ? "Time has expired!" : `(${formatTime(timeLeft)})`}</p>
            <div className="buttonsPart">
                <button className="buttons verify">Verify</button>
                <button className="buttons send" onClick={handleSendAgain}>
                    Send Again
                </button>
            </div>
        </Wrapper>
    );
};

export default VerPhoneNumComponent;
