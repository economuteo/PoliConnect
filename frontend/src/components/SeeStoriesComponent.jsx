import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Stories from "react-insta-stories";

import { AppContext } from "../contexts/AppContext";
import { ReactComponent as MoreIcon } from "../assets/images/more-icon.svg";

import Wrapper from "../assets/wrappers/SeeStories";

const SeeStoriesComponent = () => {
    const location = useLocation();
    const [isCurrentUser, setIsCurrentUser] = useState(location.state?.isCurrentUser || false);

    const { userStoriesUrls } = useContext(AppContext);
    const stories = userStoriesUrls;

    return (
        <Wrapper>
            <Stories
                width={"100vw"}
                height={"90vh"}
                className="stories"
                stories={stories}
                defaultInterval={1500}
            />
            {isCurrentUser && (
                <div className="storyFooter">
                    <div className="currentUserMoreOptions">
                        <MoreIcon />
                        <p>More</p>
                    </div>
                </div>
            )}
        </Wrapper>
    );
};

export default SeeStoriesComponent;
