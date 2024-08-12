import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/UserStoryTemplateComponent";
import { useLoaderData } from "react-router-dom";

export const userProfileImageLoader = async () => {
    const response = await customFetch.get("/users/currentUser");
    const currentUserProfileImage = response.data.user.profileImage;
    return currentUserProfileImage;
};

const CurrentUserStoryTemplateComponent = ({ userName, addStoryIcon }) => {
    const userProfileImage = useLoaderData();

    return (
        <Wrapper>
            <div className="images">
                <img src={userProfileImage} className="userProfilePicture" alt="UserPhoto" />
                <img src={addStoryIcon} className="addStoryIcon" alt="Add story" />
            </div>
            <p>{userName}</p>
        </Wrapper>
    );
};

export default CurrentUserStoryTemplateComponent;
