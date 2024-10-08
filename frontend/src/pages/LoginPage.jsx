import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LoginPage";
import LoginFormComponent from "../components/LoginFormComponent";
// import GoogleLoginButton from "../components/GoogleLoginButton";

const LoginPage = () => {
    return (
        <Wrapper>
            <LoginFormComponent />
            <p className="didntHave">
                Create New Account? <Link to="/authentification">Sign up</Link>
            </p>
            {/* <div className="otherMethodsSection">
                <p>Continue With Google</p>
                <GoogleLoginButton />
            </div> */}
        </Wrapper>
    );
};

export default LoginPage;
