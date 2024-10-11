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

    const registerDemoUser = async () => {
        const timestamp = new Date().getTime();
        const demoEmail = `demo${timestamp}@test.com`;
        const data = {
            email: demoEmail,
            password: "DemoPassword1234",
            fullName: `Demo User`,
            username: `demo${timestamp}`,
            university: "Politehnica University of Bucharest",
            profile: "Electronics, Telecommunications and Information Technology",
            year: "4",
            profileImage:
                "https://res.cloudinary.com/diydmnphf/image/upload/v1728469939/users-profile-photos/kyttld9zwp8aepuwgr4z.png",
            bannerImage:
                "https://res.cloudinary.com/diydmnphf/image/upload/v1726415614/default-banner.png",
        };

        try {
            // Create the demo user
            await customFetch.post("/auth/registerDemoUser", data);

            // // Log in the demo user
            // await customFetch.post("/auth/login", { email: demoEmail, password: data.password });

            // toast.success("Enjoy the demo!");
            // sessionStorage.setItem("isDemoUser", "true");
            // navigate("/feed");
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        // Validations
        // if (!data.email.endsWith("@stud.fils.upb.ro")) {
        //     toast.error("Please use your UPB university email address");
        //     setIsSubmitting(false);
        //     return;
        // }
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
                    <div className="buttons">
                        <button type="submit" disabled={isSubmitting || isRegisterSuccessful}>
                            {isSubmitting ? "Submitting..." : "Register"}
                        </button>
                        <button id="exploreButton" onClick={() => registerDemoUser()}>
                            Explore the app
                        </button>
                    </div>
                </Form>
            </Wrapper>
        </>
    );
};

export default RegisterFormComponent;
