import { useState } from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Email } from "../assets/images/RegisterForm/email.svg";
import { ReactComponent as PasswordHidden } from "../assets/images/RegisterForm/passwordHidden.svg";
import { ReactComponent as PasswordLock } from "../assets/images/RegisterForm/passwordLock.svg";
import { ReactComponent as ShowPassword } from "../assets/images/RegisterForm/showPassword.svg";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Wrapper from "../assets/wrappers/LoginFormComponent";
import IOSSwitch from "./IOSSwitch";

const LoginFormComponent = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements[1].value;
        if (!email.endsWith("@stud.fils.upb.ro")) {
            toast.error("Please use your UPB university email address");
        } else {
            // Form logic to be addded soon
        }
    };

    return (
        <>
            <Wrapper>
                <p className="title">Login Your Account</p>
                <form className="loginForm" onSubmit={handleSubmit}>
                    <div className="parent">
                        <input type="email" placeholder="Enter your email" required />
                        <Email className="childImage" />
                    </div>
                    <div className="parent">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                        />
                        <PasswordLock className="childImage" />
                        {showPassword ? (
                            <PasswordHidden
                                className="secondChildImage"
                                onClick={togglePasswordVisibility}
                            />
                        ) : (
                            <ShowPassword
                                className="secondChildImage"
                                onClick={togglePasswordVisibility}
                            />
                        )}
                    </div>
                    <div className="goodLine">
                        <IOSSwitch />
                        <div className="saveMeForget">
                            <span>Save Me</span>
                            <span>
                                <Link to="/authentification/forgetPassword">
                                    Forgotten Password?
                                </Link>
                            </span>
                        </div>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </Wrapper>
        </>
    );
};

export default LoginFormComponent;
