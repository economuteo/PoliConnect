import { Form, redirect } from "react-router-dom";

import Wrapper from "../assets/wrappers/CreateUsernameComponent";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);

    try {
        await customFetch.post("/auth/saveAdditionalInfo", data);
        return redirect("/authentification/addProfilePicture");
    } catch (error) {
        toast.error(error?.response?.data?.message || "An error occurred");
        return error;
    }
};

const CreateUsernameComponent = () => {
    return (
        <Wrapper>
            <p className="title">Additional Information</p>
            <p className="shortDescription">You can always change it later if you need.</p>
            <Form method="post">
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
                    <button type="submit" className="emailNextButton">
                        Next
                    </button>
                </div>
            </Form>
        </Wrapper>
    );
};

export default CreateUsernameComponent;
