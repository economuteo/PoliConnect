import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { ReactComponent as Email } from "../assets/images/RegisterForm/email.svg";
import { ReactComponent as PasswordHidden } from "../assets/images/RegisterForm/passwordHidden.svg";
import { ReactComponent as PasswordLock } from "../assets/images/RegisterForm/passwordLock.svg";
import { ReactComponent as ShowPassword } from "../assets/images/RegisterForm/showPassword.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from "../assets/wrappers/LoginFormComponent";
import IOSSwitch from "./IOSSwitch";
import customFetch from "../utils/customFetch";

const LoginFormComponent = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        // if (!data.email.endsWith("@stud.fils.upb.ro")) {
        //     toast.error("Please use your UPB university email address");
        //     setIsSubmitting(false);
        //     return;
        // }

        try {
            await customFetch.post("/auth/login", data);
            toast.success("Login successful!");
            setIsLoginSuccessful(true);
            navigate("/feed");
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Wrapper>
                <p className="title">Login Your Account</p>
                <Form method="post" className="loginForm" onSubmit={handleSubmit}>
                    <div className="parent">
                        <input type="email" name="email" placeholder="Enter your email" required />
                        <Email className="childImage" />
                    </div>
                    <div className="parent">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
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
                    <button type="submit" disabled={isSubmitting || isLoginSuccessful}>
                        {isSubmitting ? "Submitting..." : "Login"}
                    </button>
                </Form>
            </Wrapper>
        </>
    );
};

export default LoginFormComponent;
