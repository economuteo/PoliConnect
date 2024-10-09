import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/CreateUsernameComponent";

const CreateUsernameComponent = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSaveSuccessful, setIsSaveSuccessful] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        try {
            await customFetch.post("/auth/saveAdditionalInfo", data);
            toast.success("Information saved successfully!");
            setIsSaveSuccessful(true);
            navigate("/authentification/addProfilePicture");
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
            setIsSubmitting(false);
        }
    };

    return (
        <Wrapper>
            <p className="title">Additional Information</p>
            <p className="shortDescription">You can always change it later if you need.</p>
            <Form method="post" onSubmit={handleSubmit}>
                <div className="parent">
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        required
                        maxLength="18"
                    />
                </div>
                <div className="parent">
                    <input type="text" placeholder="University" name="university" required />
                </div>
                <div className="parent">
                    <input
                        type="text"
                        placeholder="Profile"
                        name="profile"
                        required
                        maxLength="18"
                    />
                </div>
                <select name="year" className="parent" required>
                    <option value="" disabled selected>
                        Current Year
                    </option>
                    <option value="1">I</option>
                    <option value="2">II</option>
                    <option value="3">III</option>
                    <option value="4">IV</option>
                </select>
                <div className="buttons">
                    <button
                        type="submit"
                        className="emailNextButton"
                        disabled={isSubmitting || isSaveSuccessful}>
                        {isSubmitting ? "Submitting..." : "Next"}
                    </button>
                </div>
            </Form>
        </Wrapper>
    );
};

export default CreateUsernameComponent;
