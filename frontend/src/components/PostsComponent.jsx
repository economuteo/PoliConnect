import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { EventPostComponent, PhotoPostComponent } from "../components";

import customFetch from "../utils/customFetch";

import Wrapper from "../assets/wrappers/PostsComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAllPostsForTheCurrentUser = async () => {
            try {
                const response = await customFetch.get("/posts/getAllPostsForTheCurrentUser");
                const posts = response.data;
                setPosts(posts);
            } catch (err) {
                setErrorMessage(err.response.data.error);
            } finally {
                setLoading(false);
            }
        };

        getAllPostsForTheCurrentUser();
    }, []);

    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}>
                <ClipLoader color="#ffffff" size={150} />
            </div>
        );
    }

    return (
        <Wrapper>
            {errorMessage && <p id="errorMessage">{errorMessage}</p>}
            {posts?.map((post) =>
                post.typeOfPost === "EventPost" ? (
                    <EventPostComponent key={post._id} eventPost={post} />
                ) : (
                    <PhotoPostComponent key={post._id} photoPost={post} />
                )
            )}
        </Wrapper>
    );
};

export default PostsComponent;
