import Wrapper from "../../assets/wrappers/OnBoarding";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { OnBoardingTemplateComponent, OnBoardingRegistrationComponent } from "../../components";

// Icons
import BachelorIcon from "../../assets/images/bachelor.png";
import SocialMediaAppIcon from "../../assets/images/social-media-app.png";
import ChatIcon from "../../assets/images/chat.png";
import GPSIcon from "../../assets/images/gps.png";

const OnBoarding = () => {
    return (
        <Wrapper>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <OnBoardingTemplateComponent
                        SVGComponent={BachelorIcon}
                        firstParagraph="Welcome To PoliConnect"
                        secondParagraph="The first social media app made just for the students of Politehnica University"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <OnBoardingTemplateComponent
                        SVGComponent={SocialMediaAppIcon}
                        firstParagraph="Best Social App For UPB Students"
                        secondParagraph="Take a look at the snapshots of the life of the students or teachers and enjoy the vibe of Politehnica University"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <OnBoardingTemplateComponent
                        SVGComponent={ChatIcon}
                        firstParagraph="Chat safer than ever"
                        secondParagraph="We are not collecting data of any kind <br>Talk with your colleagues or with your teachers stress-free"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <OnBoardingTemplateComponent
                        SVGComponent={GPSIcon}
                        firstParagraph="Classroom Finder"
                        secondParagraph="Remove the clutter of navigating through the campus with the help of our tailored PoliGPS"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <OnBoardingRegistrationComponent />
                </SwiperSlide>
            </Swiper>
        </Wrapper>
    );
};

export default OnBoarding;
