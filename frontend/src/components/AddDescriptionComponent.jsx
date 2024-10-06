import { Form, useNavigation, useLocation, redirect } from "react-router-dom";
import { toast } from "react-toastify";

import customFetch from "../utils/customFetch";

import Wrapper from "../assets/wrappers/AddDescriptionComponent";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const fileURL = data.formDataPreviousInfo;

    const response = await fetch(fileURL);
    const fileBlob = await response.blob();
    const file = new File([fileBlob], "photoPost", { type: fileBlob.type });

    try {
        const formData = new FormData();
        formData.append("photoPost", file);

        if (data.description.trim().length > 0) {
            formData.append("description", data.description);
        }

        await customFetch.post("/posts/addPhotoPost", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        toast.success("Post added successfully!");

        return redirect("/feed");
    } catch (error) {
        toast.error(error?.response?.data?.message || "An error occurred");
    }
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
                <p className="description">Description:</p>
                <div className="parent">
                    <textarea type="text" name="description" />
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
