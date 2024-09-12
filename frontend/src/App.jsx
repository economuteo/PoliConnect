import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AddStoryComponent, FinishStoryComponent } from "./components";

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
    CreateUsernamePage,
    ProfilePhotoQuestionPage,
    AddProfilePicturePage,
    FeedLayoutPage,
    AddStoryPage,
    ProfilePage,
    MessagesPage,
    NotificationsPage,
    IntoAppPage,
    Error,
} from "./pages";

import { action as registerAction } from "./components/RegisterFormComponent.jsx";
import { action as loginAction } from "./components/LoginFormComponent.jsx";
import { action as resetPasswordAction } from "./components/ResetPasswordComponent.jsx";
import { action as checkEmailAction } from "./components/EmailComponent.jsx";
import { action as createUsernameAction } from "./components/CreateUsernameComponent.jsx";
import { action as saveProfilePhotoAction } from "./components/ProfilePictureUpload.jsx";

import { userProfileImageLoader } from "./components/CurrentUserStoryTemplateComponent.jsx";

import { AppProvider } from "./contexts/AppContext";
import FinishStoryPage from "./pages/FinishStoryPage.jsx";

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
                    },
                    {
                        path: "accountCreated",
                        element: <AccountCreatedPage />,
                        errorElement: <Error />,
                    },
                    {
                        path: "createUsername",
                        element: <CreateUsernamePage />,
                        action: createUsernameAction,
                        errorElement: <Error />,
                    },
                    {
                        path: "profilePhotoQuestion",
                        element: <ProfilePhotoQuestionPage />,
                        errorElement: <Error />,
                    },
                    {
                        path: "addProfilePicture",
                        element: <AddProfilePicturePage />,
                        action: saveProfilePhotoAction,
                        errorElement: <Error />,
                    },
                ],
            },
            {
                path: "",
                element: <IntoAppPage />,
                children: [
                    {
                        path: "feed",
                        element: <FeedLayoutPage />,
                        loader: userProfileImageLoader,
                    },
                    {
                        path: "messages",
                        element: <MessagesPage />,
                    },
                    {
                        path: "notifications",
                        element: <NotificationsPage />,
                    },
                    {
                        path: "profile",
                        element: <ProfilePage />,
                    },
                ],
            },
            {
                path: "story",
                children: [
                    {
                        index: true,
                        element: <AddStoryPage />,
                    },
                    {
                        path: "addStory",
                        element: <FinishStoryPage />,
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
