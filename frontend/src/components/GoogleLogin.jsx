import { useGoogleLogin } from "@react-oauth/google";
import Wrapper from "../assets/wrappers/GoogleLogin";
import { ReactComponent as GoogleIcon } from "../assets/images/googleLogo.svg";

const GoogleLogin = () => {
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => console.log(tokenResponse),
    });

    return (
        <Wrapper onClick={() => login()}>
            <GoogleIcon />
        </Wrapper>
    );
};

export default GoogleLogin;
