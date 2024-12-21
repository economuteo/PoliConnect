import React, { useCallback, useEffect, useState, useRef } from "react";
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
    const [posts, setPosts] = useState(mostRecentPost ? [mostRecentPost] : []);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const limit = 5;

    return (
        <Wrapper>
            {errorMessage && <p id="errorMessage">{errorMessage}</p>}
            {posts.map((post, index) =>
                post.typeOfPost === "EventPost" ? (
                    <EventPostComponent key={post._id || index} eventPost={post} />
                ) : (
                    <PhotoPostComponent key={post._id || index} photoPost={post} />
                )
            )}
            {posts.length === 0 && <p id="noPostsMessage">No posts were made yet!</p>}
            {loading && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                    }}>
                    <ClipLoader color="#ffffff" size={50} />
                </div>
            )}
        </Wrapper>
    );
};

export default PostsComponent;
