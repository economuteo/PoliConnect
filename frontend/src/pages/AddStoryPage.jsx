import Wrapper from "../assets/wrappers/AddStoryPage";
import { GlobalStyle } from "../assets/wrappers/GlobalStyle";
import { StoryNavbarComponent, AddStoryComponent } from "../components";

const AddStoryPage = () => {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <StoryNavbarComponent />
                <AddStoryComponent />
            </Wrapper>
        </>
    );
};

export default AddStoryPage;
