import { useContext } from "react";
import Stories from "react-insta-stories";

import { AppContext } from "../contexts/AppContext";

import Wrapper from "../assets/wrappers/SeeStories";

const SeeStoriesComponent = () => {
    const { userStoriesUrls } = useContext(AppContext);
    const stories = userStoriesUrls;

    return (
        <Wrapper>
            <Stories
                width={"100vw"}
                height={"100vh"}
                keyboardNavigation={true}
                className="stories"
                stories={stories}
                defaultInterval={1500}
            />
        </Wrapper>
    );
};

export default SeeStoriesComponent;
