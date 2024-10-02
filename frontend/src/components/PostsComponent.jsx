import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import Wrapper from "../assets/wrappers/PostsComponent";

import { EventPostComponent, PhotoPostComponent } from "../components";

import customFetch from "../utils/customFetch";

import { useLoaderData } from "react-router-dom";

export const firstPostLoader = async () => {
    const response = await customFetch.get("/posts/getFirstPostForTheCurrentUser");
    return response.data;
};

const PostsComponent = () => {
    const { mostRecentPost } = useLoaderData();

    const [posts, setPosts] = useState(null);
    const [firstPost, setFirstPost] = useState(mostRecentPost);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAllPostsForTheCurrentUser = async () => {
            try {
                // Modify link here if back-end remains
                const response = await customFetch.get("/posts/getNoOfPostsForTheCurrentUser");
                const posts = response.data;
                setPosts(posts);
            } catch (err) {
                setErrorMessage(err.response.data.error);
            } finally {
                setLoading(false);
            }
        };

        getAllPostsForTheCurrentUser();
    }, [firstPost]);

    // if (loading) {
    //     return (
    //         <div
    //             style={{
    //                 display: "flex",
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 height: "100vh",
    //             }}>
    //             <ClipLoader color="#ffffff" size={150} />
    //         </div>
    //     );
    // }

    return (
        <Wrapper>
            {errorMessage && <p id="errorMessage">{errorMessage}</p>}
            {firstPost?.typeOfPost === "EventPost" ? (
                <EventPostComponent key={firstPost._id} eventPost={firstPost} />
            ) : (
                <PhotoPostComponent key={firstPost._id} photoPost={firstPost} />
            )}
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
