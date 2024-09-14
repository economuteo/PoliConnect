import { useLoaderData } from "react-router-dom";

import CurrentUserStoryTemplateComponent from "./CurrentUserStoryTemplateComponent";
import UserStoryTemplateComponent from "./UserStoryTemplateComponent";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import Wrapper from "../assets/wrappers/StoriesComponent";

import Jacob from "../assets/images/user.png";
import AddStoryIcon from "../assets/images/add-story-icon.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import customFetch from "../utils/customFetch";

export const getStoriesOfFollowedUsersLoader = async () => {
    const response = await customFetch.get("/stories/getStoriesOfFollowingUsers");
    const usersData = response.data.usersData;
    return usersData;
};

const StoriesComponent = () => {
    const { getStoriesOfFollowedUsers } = useLoaderData();

    return (
        <Wrapper className="container">
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
                        userProfileImage={Jacob}
                        userName={"Your story"}
                        addStoryIcon={AddStoryIcon}
                    />
                </SwiperSlide>
                {getStoriesOfFollowedUsers.map((userData, index) => (
                    <SwiperSlide key={index}>
                        <UserStoryTemplateComponent
                            userProfileImage={userData.profileImage}
                            userName={userData.username}
                            userId={userData._id}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
};

export default StoriesComponent;
