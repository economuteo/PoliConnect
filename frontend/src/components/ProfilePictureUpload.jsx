import React, { useState, useRef } from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

import Wrapper from "../assets/wrappers/ProfilePictureUpload";
import UserProfile from "../assets/images/user-profile.png";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get("profileImage");

    if (file && file.size > 500000) {
        toast.error("Image size too large");
        return null;
    }

    try {
        await customFetch.patch("/auth/savePhoto", formData);
        toast.success("Photo saved successfully!");
        return redirect("/authentification/accountCreated");
    } catch (error) {
        toast.error(error?.response?.data?.message || "An error occurred");
        return null;
    }
};

const ProfilePictureUpload = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageSrc(URL.createObjectURL(file));
        }
    };

    const handleChoosePhoto = () => {
        fileInputRef.current.click();
    };

    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (
        <Wrapper>
            <p className="title">Upload Profile Picture</p>
            {imageSrc ? (
                <div className="finalImage">
                    <img src={imageSrc} alt="Profile" />
                </div>
            ) : (
                <div className="finalImage">
                    <img src={UserProfile} alt="UserProfile" />
                </div>
            )}
            <Form method="post" encType="multipart/form-data">
                <input
                    type="file"
                    accept="image/*"
                    name="profileImage"
                    ref={fileInputRef}
                    onChange={handleFileInputChange}
                />
                <div className="buttons">
                    <button type="button" onClick={handleChoosePhoto}>
                        Upload Photo
                    </button>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Next"}
                    </button>
                </div>
            </Form>
        </Wrapper>
    );
};

export default ProfilePictureUpload;
