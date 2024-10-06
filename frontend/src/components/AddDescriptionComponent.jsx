import { Form, useNavigation, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import customFetch from "../utils/customFetch";

import Wrapper from "../assets/wrappers/AddDescriptionComponent";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    console.log(data);

    await customFetch.post("/posts/addPhotoPost", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

const AddDescriptionComponent = () => {
    const location = useLocation();
    const { fileURL } = location.state || {};

    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <Wrapper className="container">
            <p className="title">Additional Details</p>
            <Form method="post">
                <label htmlFor="description" className="description">
                    Description:
                </label>
                <div className="parent">
                    <textarea type="text" name="fullName" />
                </div>
                <input type="hidden" name="formDataPreviousInfo" value={fileURL} />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Add Post"}
                </button>
            </Form>
        </Wrapper>
    );
};

export default AddDescriptionComponent;
