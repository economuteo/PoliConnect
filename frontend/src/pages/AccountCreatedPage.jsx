import { Link, useNavigate } from "react-router-dom";

import Wrapper from "../assets/wrappers/AccountCreatedPage";

import SuccessIcon from "../assets/images/success-icon.png";
import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

const CongratsPage = () => {
    const navigate = useNavigate();

    const { setRemoveNavbar } = useContext(AppContext);

    useEffect(() => {
        setRemoveNavbar(true);

        return () => setRemoveNavbar(false);
    }, [setRemoveNavbar]);

    return (
        <Wrapper>
            <img src={SuccessIcon} className="successIcon" alt="Success Icon" />
            <p className="title">Congrats!</p>
            <p className="shortDescription">Account Created Succesfuly</p>
            <Link to="/feed">
                <button>Get Started</button>
            </Link>
        </Wrapper>
    );
};

export default CongratsPage;
