import Wrapper from "../assets/wrappers/CreatePhotoPostPage";
import {
    CreatePhotoPostNavbarComponent,
    CreatePhotoPostComponent,
    CreatePhotoPostFooterComponent,
} from "../components";

const CreatePhotoPostPage = () => {
    return (
        <Wrapper className="container">
            <CreatePhotoPostNavbarComponent />
            <CreatePhotoPostComponent />
            <CreatePhotoPostFooterComponent />
        </Wrapper>
    );
};

export default CreatePhotoPostPage;
