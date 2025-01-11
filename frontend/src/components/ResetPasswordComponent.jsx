import { useState } from "react";
import { toast } from "react-toastify";
import { Form, useNavigate } from "react-router-dom";
import PasswordComponent from "./PasswordComponent";
import Wrapper from "../assets/wrappers/RegisterFormComponent";
import customFetch from "../utils/customFetch";

const ResetPasswordComponent = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isResetSuccessful, setIsResetSuccessful] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        // Validations
        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match");
            setIsSubmitting(false);
            return;
        }

        try {
            await customFetch.post("/auth/resetPassword", data);
            toast.success("Your password has been successfully reset!");
            setIsResetSuccessful(true);
            navigate("/authentification/login");
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
            setIsSubmitting(false);
        }
    };

    return (
        <Wrapper>
            <p className="title">Reset Your Password</p>
            <Form method="post" className="registrationForm" onSubmit={handleSubmit}>
                <PasswordComponent />
                <button
                    type="submit"
                    className="singleReset"
                    disabled={isSubmitting || isResetSuccessful}>
                    {isSubmitting ? "Submitting..." : "Reset"}
                </button>
            </Form>
        </Wrapper>
    );
};

export default ResetPasswordComponent;
