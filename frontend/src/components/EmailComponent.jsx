import Wrapper from "../assets/wrappers/PhoneNumberComponent";
import { ReactComponent as Email } from "../assets/images/RegisterForm/email.svg";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    if (!data.email.endsWith("@stud.fils.upb.ro")) {
        toast.error("Please use your UPB university email address");
        return null;
    }

    try {
        await customFetch.post("/auth/checkEmail", data);
        return redirect("/authentification/verifyEmail");
    } catch (error) {
        toast.error(error?.response?.data?.message || "An error occurred");
        return error;
    }
};

const EmailComponent = () => {
    return (
        <Wrapper>
            <p className="title">Enter Your Email</p>
            <Form method="post">
                <div className="parent">
                    <input type="email" placeholder="Email" name="email" required />
                    <Email className="childImage" />
                </div>
                <div className="buttons">
                    <button type="submit" className="emailNextButton">
                        Next
                    </button>
                </div>
            </Form>
        </Wrapper>
    );
};

export default EmailComponent;
