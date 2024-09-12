import CurrentUserStoryTemplateComponent from "./CurrentUserStoryTemplateComponent";

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
            </Swiper>
        </Wrapper>
    );
};

export default StoriesComponent;
