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

const StoriesComponent = () => {
    return (
        <Wrapper>
            <Swiper
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <CurrentUserStoryTemplateComponent
                        userProfileImage={Jacob}
                        userName={"Your story"}
                        addStoryIcon={AddStoryIcon}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <UserStoryTemplateComponent
                        userProfileImage={Jacob}
                        userName={"cosmin_draghici"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <UserStoryTemplateComponent
                        userProfileImage={Jacob}
                        userName={"victor_todica"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <UserStoryTemplateComponent
                        userProfileImage={Jacob}
                        userName={"victor_todica"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <UserStoryTemplateComponent
                        userProfileImage={Jacob}
                        userName={"victor_todica"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <UserStoryTemplateComponent
                        userProfileImage={Jacob}
                        userName={"victor_todica"}
                    />
                </SwiperSlide>
            </Swiper>
        </Wrapper>
    );
};

export default StoriesComponent;
