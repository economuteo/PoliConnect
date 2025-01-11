import { useLocation } from "react-router-dom";
import Wrapper from "../assets/wrappers/CreatePhotoPostPage";
import {
    CreatePhotoPostNavbarComponent,
    CreatePhotoPostComponent,
    CreatePhotoPostFooterComponent,
} from "../components";

const CreatePhotoPostPage = () => {
    const location = useLocation();
    const { file } = location.state || {};

    return (
        <Wrapper className="container">
            <CreatePhotoPostNavbarComponent />
            <CreatePhotoPostComponent />
            <CreatePhotoPostFooterComponent file={file} />
        </Wrapper>
    );
};

export default CreatePhotoPostPage;
