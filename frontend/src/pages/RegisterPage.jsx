import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterPage";
import { RegisterFormComponent } from "../components";
import GoogleLoginButton from "../components/GoogleLoginButton";

const RegisterPage = () => {
    return (
        <Wrapper>
            <div className="registerButtonsPart">
                <RegisterFormComponent />
                <p>Or continue with Google</p>
                <GoogleLoginButton />
            </div>
            <p className="alreadyHad">
                Already have an account? <Link to="login">Sign in</Link>
            </p>
        </Wrapper>
    );
};

export default RegisterPage;
