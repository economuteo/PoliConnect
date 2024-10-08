import { useState, useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import PasswordComponent from "./PasswordComponent";
import { ReactComponent as Profile } from "../assets/images/RegisterForm/profile.svg";
import { ReactComponent as Email } from "../assets/images/RegisterForm/email.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Wrapper from "../assets/wrappers/RegisterFormComponent";
import customFetch from "../utils/customFetch.js";

const RegisterFormComponent = () => {
    const { setComingFrom } = useContext(AppContext);
    setComingFrom("register");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRegisterSuccessful, setIsRegisterSuccessful] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        // Validations
        if (!data.email.endsWith("@stud.fils.upb.ro")) {
            toast.error("Please use your UPB university email address");
            setIsSubmitting(false);
            return;
        }
        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match");
            setIsSubmitting(false);
            return;
        }

        try {
            await customFetch.post("/auth/registerRequest", data);
            toast.success("Verification code sent to your email!");
            setIsRegisterSuccessful(true);
            navigate("/authentification/verifyEmail");
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Wrapper>
                <p className="title">Create Your Account</p>
                <Form method="post" className="registrationForm" onSubmit={handleSubmit}>
                    <div className="parent">
                        <input type="text" name="fullName" placeholder="Full Name" required />
                        <Profile className="childImage" />
                    </div>
                    <div className="parent">
                        <input type="email" name="email" placeholder="Enter your email" required />
                        <Email className="childImage" />
                    </div>
                    <PasswordComponent />
                    <button type="submit" disabled={isSubmitting || isRegisterSuccessful}>
                        {isSubmitting ? "Submitting..." : "Register"}
                    </button>
                </Form>
            </Wrapper>
        </>
    );
};

export default RegisterFormComponent;
