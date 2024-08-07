import { toast } from "react-toastify";
import { Form, redirect } from "react-router-dom";

import PasswordComponent from "./PasswordComponent";
import Wrapper from "../assets/wrappers/RegisterFormComponent";

import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log("here");

    // Validations
    if (data.password !== data.confirmPassword) {
        toast.error("Passwords do not match");
        return null;
    }

    try {
        await customFetch.post("/auth/resetPassword", data);
        toast.success(" Your password has been successfully reset!");
        return redirect("/authentification/login");
    } catch (error) {
        toast.error(error?.response?.data?.message || "An error occurred");
        return error;
    }
};

const ResetPasswordComponent = () => {
    return (
        <Wrapper>
            <p className="title">Reset Your Password</p>
            <Form method="post" className="registrationForm">
                <PasswordComponent />
                <button type="submit" className="singleReset">
                    Reset
                </button>
            </Form>
        </Wrapper>
    );
};

export default ResetPasswordComponent;
