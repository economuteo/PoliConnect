import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

import RightArrow from "../assets/images/right-arrow.png";

import Wrapper from "../assets/wrappers/FinishStoryFooterComponent";

import customFetch from "../utils/customFetch";

const FinishStoryFooterComponent = () => {
    const { file } = useContext(AppContext);

    const addPhotoToStory = async () => {
        if (!file) {
            console.error("No file found in context");
            return;
        }

        try {
            console.log("Da");
            const formData = new FormData();
            formData.append("story", file);

            await customFetch.post("/stories/addStory", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        } catch (error) {
            console.error(
                "Error adding photo to story: ",
                error.response?.data?.msg || error.message
            );
        }
    };

    return (
        <Wrapper className="container">
            <p></p>
            <img
                onClick={addPhotoToStory}
                className="rightArrow"
                src={RightArrow}
                alt="Right Arrow"
            />
        </Wrapper>
    );
};

export default FinishStoryFooterComponent;
