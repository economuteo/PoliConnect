import Wrapper from "../assets/wrappers/FeedLayoutPage";
import { FeedNavbar, StoriesComponent } from "../components";

const FeedLayoutPage = () => {
    return (
        <Wrapper>
            <FeedNavbar />
            <StoriesComponent />
        </Wrapper>
    );
};

export default FeedLayoutPage;
