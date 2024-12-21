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
    const [totalPosts, setTotalPosts] = useState(0);
    const [stopFetchingPosts, setStopFetchingPosts] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const limit = 5; // Number of posts per page

    const observerRef = useRef(null); // Ref for the sentinel element
    const isFetchingRef = useRef(false); // Tracks ongoing API calls

    // Fetch posts from the server
    const fetchPosts = useCallback(async () => {
        if (isFetchingRef.current || stopFetchingPosts) return;

        isFetchingRef.current = true;
        setLoading(true);

        try {
            const response = await customFetch.get(
                `/posts/getNoOfPostsForTheCurrentUser?page=${page}&limit=${limit}`
            );
            const newPosts = response.data.posts;
            setTotalPosts(response.data.postsLength);

            if (
                newPosts.length === 0 ||
                posts.length + newPosts.length >= response.data.postsLength
            ) {
                setStopFetchingPosts(true);
            } else {
                setPosts((prevPosts) => [...prevPosts, ...newPosts]);
            }
        } catch (err) {
            setErrorMessage(err.response?.data?.error || "An error occurred");
        } finally {
            setLoading(false);
            isFetchingRef.current = false; // Reset fetching status
        }
    }, [page]);

    // Fetch initial posts on component mount
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    // IntersectionObserver setup
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !isFetchingRef.current) {
                    setPage((prevPage) => prevPage + 1);
                }
            },
            {
                threshold: 0.1, // Trigger when at least 10% of the sentinel is visible
                rootMargin: "200px", // Trigger 200px before the sentinel enters the viewport
            }
        );

        if (observerRef.current) observer.observe(observerRef.current);

        return () => {
            if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, []);

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
            <div ref={observerRef} id="observerRef"></div>
        </Wrapper>
    );
};

export default PostsComponent;
