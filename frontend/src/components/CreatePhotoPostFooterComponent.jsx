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

        try {
            const formData = new FormData();
            formData.append("photoPost", file);

            await customFetch.post("/posts/addPhotoPost", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            navigate("/feed");
        } catch (error) {
            console.error(
                "Error adding photo to story: ",
                error.response?.data?.msg || error.message
            );
        }
    };

    return (
        <Wrapper>
            <p></p>
            <img onClick={addPhotoPost} className="rightArrow" src={RightArrow} alt="Right Arrow" />
        </Wrapper>
    );
};

export default CreatePhotoPostFooterComponent;
