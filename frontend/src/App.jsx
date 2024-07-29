import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
    HomeLayout,
    AuthentificationLayout,
    WelcomePage,
    OnBoarding,
    RegisterPage,
    LoginPage,
    ForgetPasswordPage,
    Error,
    PhoneNumberPage,
    VerifyPhoneNumberPage,
    VerifyEmailPage,
    ResetPasswordPage,
    AccountCreatedPage,
} from "./pages";
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
                        errorElement: <Error />,
                    },
                    {
                        path: "login",
                        element: <LoginPage />,
                        errorElement: <Error />,
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
                        children: [],
                    },
                    {
                        path: "phoneNumber",
                        element: <PhoneNumberPage />,
                        errorElement: <Error />,
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
