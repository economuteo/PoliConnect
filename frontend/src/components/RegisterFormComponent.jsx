import { Form, redirect, useNavigation } from "react-router-dom";

import PasswordComponent from "./PasswordComponent";

import { ReactComponent as Profile } from "../assets/images/RegisterForm/profile.svg";
import { ReactComponent as Email } from "../assets/images/RegisterForm/email.svg";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Wrapper from "../assets/wrappers/RegisterFormComponent";

import customFetch from "../utils/customFetch.js";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    // Validations
    if (!data.email.endsWith("@stud.fils.upb.ro")) {
        toast.error("Please use your UPB university email address");
        return null;
    }
    if (data.password !== data.confirmPassword) {
        toast.error("Passwords do not match");
        return null;
    }

    try {
        await customFetch.post("/auth/register", data);
        toast.success("Registration successful!");
        return redirect("/authentification/createUsername");
    } catch (error) {
        toast.error(error?.response?.data?.message || "An error occurred");
        return error;
    }
};

const RegisterFormComponent = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <>
            <Wrapper>
                <p className="title">Create Your Account</p>
                <Form method="post" className="registrationForm">
                    <div className="parent">
                        <input type="text" name="fullName" placeholder="Full Name" required />
                        <Profile className="childImage" />
                    </div>
                    <div className="parent">
                        <input type="email" name="email" placeholder="Enter your email" required />
                        <Email className="childImage" />
                    </div>
                    <PasswordComponent />
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Register"}
                    </button>
                </Form>
            </Wrapper>
        </>
    );
};

export default RegisterFormComponent;
