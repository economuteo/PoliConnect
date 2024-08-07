import { Form, redirect } from "react-router-dom";

import Wrapper from "../assets/wrappers/CreateUsernameComponent";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        await customFetch.post("/auth/createUsername", data);
        return redirect("/authentification/addProfilePicture");
    } catch (error) {
        toast.error(error?.response?.data?.message || "An error occurred");
        return error;
    }
};

const CreateUsernameComponent = () => {
    return (
        <Wrapper>
            <p className="title">Create Username</p>
            <p className="shortDescription">
                Please choose a username for your new account. You can always change it later if you
                change your mind.
            </p>
            <Form method="post">
                <div className="parent">
                    <input type="text" placeholder="Username" name="username" required />
                </div>
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
