import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogin from "../components/GoogleLogin";

const CLIENT_ID = "990702016016-81mlmgmj5ifckk05hkahpg329fl5177q.apps.googleusercontent.com";

const GoogleLoginButton = () => {
    const onSuccess = (response) => {
        console.log("Login Success:", response);
        // Handle the successful login here
    };

    const onFailure = (response) => {
        console.error("Login Failed:", response);
    };

    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <GoogleLogin />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;
