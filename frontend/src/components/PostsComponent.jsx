import React, { useCallback, useEffect, useState } from "react";
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

    const [posts, setPosts] = useState([]);
    const [firstPost, setFirstPost] = useState(mostRecentPost);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const limit = 5; // Number of posts per page

    const fetchPosts = useCallback(async () => {
        try {
            setLoading(true);
            const response = await customFetch.get(
                `/posts/getNoOfPostsForTheCurrentUser?page=${page}&limit=${limit}`
            );
            const newPosts = response.data;
            setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        } catch (err) {
            setErrorMessage(err.response?.data?.error || "An error occurred");
        } finally {
            setLoading(false);
        }
    }, [page]);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const handleScroll = useCallback(() => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
                document.documentElement.offsetHeight ||
            loading
        ) {
            return;
        }
        setPage((prevPage) => prevPage + 1);
    }, [loading]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <Wrapper>
            {errorMessage && <p id="errorMessage">{errorMessage}</p>}
            {firstPost?.typeOfPost === "EventPost" ? (
                <EventPostComponent key={firstPost._id} eventPost={firstPost} />
            ) : (
                <PhotoPostComponent key={firstPost._id} photoPost={firstPost} />
            )}
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
