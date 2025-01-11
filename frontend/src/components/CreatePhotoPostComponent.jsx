import { useLocation } from "react-router-dom";

import Wrapper from "../assets/wrappers/CreatePhotoPostComponent";

const CreatePhotoPostComponent = () => {
    const location = useLocation();
    const { imageUrl } = location.state || {};

    return (
        <Wrapper>
            <div className="cover">
                <img src={imageUrl} className="post" alt="" />
            </div>
        </Wrapper>
    );
};

export default CreatePhotoPostComponent;
