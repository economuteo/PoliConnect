import PasswordComponent from "./PasswordComponent";

import Wrapper from "../assets/wrappers/RegisterFormComponent";

const ResetPasswordComponent = () => {
    return (
        <Wrapper>
            <p className="title">Reset Your Password</p>
            <form className="registrationForm">
                <PasswordComponent />
                <button type="submit" className="singleReset">
                    Register
                </button>
            </form>
        </Wrapper>
    );
};

export default ResetPasswordComponent;
