import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactComponent as Email } from "../assets/images/RegisterForm/email.svg";
import Wrapper from "../assets/wrappers/PhoneNumberComponent";
import customFetch from "../utils/customFetch";

const EmailComponent = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isEmailCheckSuccessful, setIsEmailCheckSuccessful] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        if (!data.email.endsWith("@stud.fils.upb.ro")) {
            toast.error("Please use your UPB university email address");
            setIsSubmitting(false);
            return;
        }

        try {
            await customFetch.post("/auth/checkEmail", data);
            toast.success("Verification code sent to your email!");
            setIsEmailCheckSuccessful(true);
            navigate("/authentification/verifyEmail");
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
            setIsSubmitting(false);
        }
    };

    return (
        <Wrapper>
            <p className="title">Enter Your Email</p>
            <Form method="post" onSubmit={handleSubmit}>
                <div className="parent">
                    <input type="email" placeholder="Email" name="email" required />
                    <Email className="childImage" />
                </div>
                <div className="buttons">
                    <button
                        type="submit"
                        className="emailNextButton"
                        disabled={isSubmitting || isEmailCheckSuccessful}>
                        {isSubmitting ? "Submitting..." : "Next"}
                    </button>
                </div>
            </Form>
        </Wrapper>
    );
};

export default EmailComponent;
