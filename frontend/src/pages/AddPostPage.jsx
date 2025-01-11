import Wrapper from "../assets/wrappers/AddPostPage";
import { AddPostComponent, UserProfileNavbarComponent } from "../components";

const AddPostPage = () => {
    return (
        <Wrapper className="container">
            <UserProfileNavbarComponent />
            <AddPostComponent />
            <p></p>
        </Wrapper>
    );
};

export default AddPostPage;
