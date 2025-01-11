import { useNavigate } from "react-router-dom";

import { ReactComponent as BackLight } from "../../assets/images/back-light.svg";

import Wrapper from "../../assets/wrappers/WelcomePage";
import "../../assets/css/index.css";

const Welcome = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        document.querySelector(".welcomePage").classList.add("fade-out");
        setTimeout(() => {
            navigate("/onBoarding");
        }, 1000);
    };

    return (
        <>
            <Wrapper className="welcomePage" onClick={handleClick}>
                <BackLight className="backLight" />
                <p className="title">
                    POLI <br></br>
                    CONNECT
                </p>
            </Wrapper>
            <p className="shortIntroductionOpenPage">SINCE 2024</p>
        </>
    );
};

export default Welcome;
