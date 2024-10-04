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

    const [posts, setPosts] = useState([]);
    const [firstPost, setFirstPost] = useState(mostRecentPost);
    const [isAPICalling, setIsAPICalling] = useState(false);
    const [stopFetchingPosts, setStopFetchingPosts] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const limit = 5; // Number of posts per page

    const scrollableRef = useRef(null);

    const fetchPosts = useCallback(async () => {
        if (!isAPICalling && !stopFetchingPosts) {
            setIsAPICalling(true);
            setStopFetchingPosts(true);
            try {
                setLoading(true);

                const response = await customFetch.get(
                    `/posts/getNoOfPostsForTheCurrentUser?page=${page}&limit=${limit}`
                );
                const newPosts = response.data;

                if (newPosts.length !== 0) {
                    setStopFetchingPosts(false);
                }

                setPosts((prevPosts) => [...prevPosts, ...newPosts]);
            } catch (err) {
                setErrorMessage(err.response?.data?.error || "An error occurred");
            } finally {
                setLoading(false);
                setIsAPICalling(false);
            }
        }
    }, [page]);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    // Handle scroll event to detect when the user has scrolled to the bottom
    const handleScroll = useCallback(() => {
        const scrollableElement = scrollableRef.current;
        if (!scrollableElement) return;

        // Fetch condition
        if (
            scrollableElement.scrollTop + scrollableElement.clientHeight >=
            scrollableElement.scrollHeight
        ) {
            setPage((prevPage) => prevPage + 1);
        }
    }, []);

    // Add and remove the scroll event listener
    useEffect(() => {
        const scrollableElement = scrollableRef.current;
        if (scrollableElement) {
            scrollableElement.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (scrollableElement) {
                scrollableElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, [handleScroll]);

    return (
        <Wrapper ref={scrollableRef}>
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
