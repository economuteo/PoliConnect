import { useLoaderData } from "react-router-dom";

import CurrentUserStoryTemplateComponent from "./CurrentUserStoryTemplateComponent";
import UserStoryTemplateComponent from "./UserStoryTemplateComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import Wrapper from "../assets/wrappers/StoriesComponent";

import AddStoryIcon from "../assets/images/add-story-icon.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import customFetch from "../utils/customFetch";

export const getStoriesOfFollowedUsersLoader = async () => {
    const response = await customFetch.get("/stories/getStoriesOfFollowingUsers");
    const followedUsers = response.data.followedUsers;
    const currentUserUsername = response.data.currentUserUsername;
    return { currentUserUsername, followedUsersStoriesInfo };
};

const StoriesComponent = () => {
    const { getStoriesOfFollowedUsers } = useLoaderData();
    const { currentUser, followedUsers } = getStoriesOfFollowedUsers;

    return (
        <Wrapper>
            <Swiper
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                spaceBetween={18}
                slidesPerView="auto"
                className="mySwiper">
                <SwiperSlide>
                    <CurrentUserStoryTemplateComponent
                        userName={currentUser}
                        addStoryIcon={AddStoryIcon}
                    />
                </SwiperSlide>
                {followedUsers.map((followedUser, index) => (
                    <SwiperSlide key={index}>
                        <UserStoryTemplateComponent
                            userProfileImage={followedUser.profileImage}
                            userName={followedUser.username}
                            userId={followedUser._id}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
};

export default StoriesComponent;
