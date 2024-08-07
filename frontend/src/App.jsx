import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
    HomeLayout,
    AuthentificationLayout,
    WelcomePage,
    OnBoarding,
    RegisterPage,
    LoginPage,
    ForgetPasswordPage,
    PhoneNumberPage,
    EmailPage,
    VerifyPhoneNumberPage,
    VerifyEmailPage,
    ResetPasswordPage,
    AccountCreatedPage,
    FeedLayoutPage,
    Error,
} from "./pages";

import { action as registerAction } from "./components/RegisterFormComponent.jsx";
import { action as loginAction } from "./components/LoginFormComponent.jsx";
import { action as resetPasswordAction } from "./components/ResetPasswordComponent.jsx";
import { action as checkEmailAction } from "./components/EmailComponent.jsx";

import { AppProvider } from "./contexts/AppContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <WelcomePage />,
            },
            {
                path: "onBoarding",
                element: <OnBoarding />,
            },
            {
                path: "authentification",
                element: <AuthentificationLayout />,
                errorElement: <Error />,
                children: [
                    {
                        index: true,
                        element: <RegisterPage />,
                        action: registerAction,
                    },
                    {
                        path: "login",
                        element: <LoginPage />,
                        action: loginAction,
                    },
                    {
                        path: "forgetPassword",
                        element: <ForgetPasswordPage />,
                        errorElement: <Error />,
                        children: [],
                    },
                    {
                        path: "resetPassword",
                        element: <ResetPasswordPage />,
                        errorElement: <Error />,
                        action: resetPasswordAction,
                    },
                    {
                        path: "phoneNumber",
                        element: <PhoneNumberPage />,
                        errorElement: <Error />,
                    },
                    {
                        path: "email",
                        element: <EmailPage />,
                        errorElement: <Error />,
                        action: checkEmailAction,
                    },
                    {
                        path: "verifyPhoneNumber",
                        element: <VerifyPhoneNumberPage />,
                        errorElement: <Error />,
                    },
                    {
                        path: "verifyEmail",
                        element: <VerifyEmailPage />,
                        errorElement: <Error />,
                        children: [],
                    },
                    {
                        path: "accountCreated",
                        element: <AccountCreatedPage />,
                        errorElement: <Error />,
                        children: [],
                    },
                ],
            },
            {
                path: "feed",
                element: <FeedLayoutPage />,
                errorElement: <Error />,
            },
        ],
    },
]);

const App = () => {
    return (
        <AppProvider>
            <RouterProvider router={router} />
        </AppProvider>
    );
};

export default App;
