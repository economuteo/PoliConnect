import PasswordComponent from "./PasswordComponent";

import { ReactComponent as Profile } from "../assets/images/RegisterForm/profile.svg";
import { ReactComponent as Email } from "../assets/images/RegisterForm/email.svg";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Wrapper from "../assets/wrappers/RegisterFormComponent";

const RegisterFormComponent = () => {
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
                <p className="title">Create Your Account</p>
                <form className="registrationForm" onSubmit={handleSubmit}>
                    <div className="parent">
                        <input type="text" placeholder="Full Name" required />
                        <Profile className="childImage" />
                    </div>
                    <div className="parent">
                        <input type="email" placeholder="Enter your email" required />
                        <Email className="childImage" />
                    </div>
                    <PasswordComponent />
                    <button type="submit">Register</button>
                </form>
            </Wrapper>
        </>
    );
};

export default RegisterFormComponent;
