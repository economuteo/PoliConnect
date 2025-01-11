import Wrapper from "../assets/wrappers/FeedLayoutPage";
import { FeedNavbar, StoriesComponent, PostsComponent } from "../components";

const FeedLayoutPage = () => {
    return (
        <Wrapper>
            <FeedNavbar />
            <StoriesComponent />
            <PostsComponent />
        </Wrapper>
    );
};

export default FeedLayoutPage;
