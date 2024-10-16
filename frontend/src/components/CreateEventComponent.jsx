import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";

import customFetch from "../utils/customFetch";

import Wrapper from "../assets/wrappers/CreateEventComponent";
import { useState } from "react";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        await customFetch.post("/posts/addEvent", data);
        return redirect("/feed");
    } catch (error) {
        toast.error(error?.response?.data?.message || "An error occurred");
        return error;
    }
};

const CreateEventComponent = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        if (isSubmitting) {
            event.preventDefault();
            return;
        }

        setIsSubmitting(true);
    };

    return (
        <Wrapper>
            <div className="eventInner">
                <p className="title">Create Event</p>
                <Form method="post" onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="eventName" />
                    </div>
                    <div className="field">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="eventDate" />
                    </div>
                    <div className="field">
                        <label htmlFor="time">Time</label>
                        <input type="time" id="time" name="eventTime" />
                    </div>
                    <div className="field">
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" name="eventLocation" />
                    </div>
                    <div className="field">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="eventDescription" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Create Event"}
                    </button>
                </Form>
            </div>
        </Wrapper>
    );
};

export default CreateEventComponent;
