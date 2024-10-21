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
    CreateUsernamePage,
    CreateEventPage,
    ProfilePhotoQuestionPage,
    AddProfilePicturePage,
    FeedLayoutPage,
    AddStoryPage,
    AddPostPage,
    FinishStoryPage,
    ProfilePage,
    UserProfilePage,
    MessagesPage,
    UserMessagePage,
    NotificationsPage,
    CreatePhotoPostPage,
    IntoAppPage,
    StoriesPage,
    Error,
    SearchUsersPage,
    AddDescriptionPage,
    LikesPage,
    ParticipantsPage,
} from "./pages";

import { action as saveProfilePhotoAction } from "./components/ProfilePictureUpload.jsx";
import { action as createEventAction } from "./components/CreateEventComponent.jsx";
import { action as postPhotoAction } from "./components/AddDescriptionComponent.jsx";

import { getStoriesOfFollowedUsersLoader } from "./components/StoriesComponent.jsx";
import { userProfileImageLoader } from "./components/CurrentUserStoryTemplateComponent.jsx";
import { isUserFollowedLoader } from "./components/UserProfileComponent.jsx";
import { firstPostLoader } from "./components/PostsComponent.jsx";

import { AppProvider } from "./contexts/AppContext";

const combinedLoader = async () => {
    const [userProfileImage, getStoriesOfFollowedUsers, mostRecentPost] = await Promise.all([
        userProfileImageLoader(),
        getStoriesOfFollowedUsersLoader(),
        firstPostLoader(),
    ]);

    return {
        userProfileImage,
        getStoriesOfFollowedUsers,
        mostRecentPost,
    };
};

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
                    },
                    {
                        path: "login",
                        element: <LoginPage />,
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
                        path: "saveAdditionalInfo",
                        element: <CreateUsernamePage />,
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
                        errorElement: <Error />,
                        loader: combinedLoader,
                    },
                    {
                        path: "messages",
                        element: <MessagesPage />,
                    },
                    {
                        path: "messages/:username",
                        element: <UserMessagePage />,
                    },
                    {
                        path: "notifications",
                        element: <NotificationsPage />,
                    },
                    {
                        path: "profile",
                        element: <ProfilePage />,
                    },
                    {
                        path: "feed",
                        children: [
                            {
                                path: "searchUsers",
                                element: <SearchUsersPage />,
                            },
                            {
                                path: "userProfile/:username",
                                element: <UserProfilePage />,
                                loader: isUserFollowedLoader,
                            },
                        ],
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
            {
                path: "stories",
                element: <StoriesPage />,
            },
            {
                path: "addPost",
                element: <AddPostPage />,
            },
            {
                path: "photo",
                children: [
                    {
                        path: "createPhotoPost",
                        element: <CreatePhotoPostPage />,
                    },
                    {
                        path: "addDescription",
                        element: <AddDescriptionPage />,
                        action: postPhotoAction,
                    },
                ],
            },
            {
                path: "likes",
                element: <LikesPage />,
            },
            {
                path: "participants",
                element: <ParticipantsPage />,
            },
            {
                path: "event",
                children: [
                    {
                        path: "createEvent",
                        element: <CreateEventPage />,
                        action: createEventAction,
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
