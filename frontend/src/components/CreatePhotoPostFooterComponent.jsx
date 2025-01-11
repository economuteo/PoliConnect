import { useNavigate } from "react-router-dom";

import RightArrow from "../assets/images/right-arrow.png";

import Wrapper from "../assets/wrappers/CreatePhotoPostFooterComponent";

import customFetch from "../utils/customFetch";

const CreatePhotoPostFooterComponent = ({ file }) => {
    const navigate = useNavigate();

    const addPhotoPost = async () => {
        if (!file) {
            console.error("No photo post file found in context");
            return;
        }

        const fileURL = URL.createObjectURL(file);

        navigate("/photo/addDescription", { state: { fileURL } });
    };

    return (
        <Wrapper>
            <p></p>
            <img onClick={addPhotoPost} className="rightArrow" src={RightArrow} alt="Right Arrow" />
        </Wrapper>
    );
};

export default CreatePhotoPostFooterComponent;
