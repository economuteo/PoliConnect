import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { useNavigate } from "react-router-dom";
import navbarIcon from "../assets/images/navbar-icon.png";

const AuthNavbar = () => {
    const navigate = useNavigate();
    const [isSticky, setIsSticky] = useState(false);

    const handleGoBackClick = () => {
        navigate(-1);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Wrapper className="container" isSticky={isSticky}>
            <img
                onClick={handleGoBackClick}
                className="navIcon"
                src={navbarIcon}
                alt="Navbar Icon"
            />
        </Wrapper>
    );
};

export default AuthNavbar;
