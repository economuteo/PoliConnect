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
    const [totalPosts, setTotalPosts] = useState(0);
    const [isAPICalling, setIsAPICalling] = useState(false);
    const [stopFetchingPosts, setStopFetchingPosts] = useState(false);
    const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const limit = 5; // Number of posts per page

    const scrollableRef = useRef(null);

    const fetchPosts = useCallback(async () => {
        if (!isAPICalling && !stopFetchingPosts) {
            setStopFetchingPosts(true);
            try {
                setLoading(true);

                const response = await customFetch.get(
                    `/posts/getNoOfPostsForTheCurrentUser?page=${page}&limit=${limit}`
                );
                const newPosts = response.data.posts;
                setTotalPosts(response.data.postsLength);

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

    useEffect(() => {
        if (posts.length !== totalPosts) {
            setHasScrolledToBottom(false);
        }
    }, [posts]);

    const handleScroll = useCallback(() => {
        const scrollableElement = scrollableRef.current;
        if (!scrollableElement || hasScrolledToBottom) return;

        // New page condition
        if (
            scrollableElement.scrollTop + scrollableElement.clientHeight >=
            scrollableElement.scrollHeight
        ) {
            setPage((prevPage) => prevPage + 1);
            setHasScrolledToBottom(true);
        }
    }, [hasScrolledToBottom]);

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
            {firstPost.typeOfPost ? (
                firstPost.typeOfPost === "EventPost" ? (
                    <EventPostComponent key={firstPost._id} eventPost={firstPost} />
                ) : (
                    <PhotoPostComponent key={firstPost._id} photoPost={firstPost} />
                )
            ) : null}
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
            {posts.length > 0
                ? posts.map((post) =>
                      post.typeOfPost === "EventPost" ? (
                          <EventPostComponent key={post._id} eventPost={post} />
                      ) : (
                          <PhotoPostComponent key={post._id} photoPost={post} />
                      )
                  )
                : null}
            {console.log(firstPost)}

            {posts.length === 0 && !firstPost.typeOfPost ? (
                <p id="noPostsMessage">No posts were made yet!</p>
            ) : null}
        </Wrapper>
    );
};

export default PostsComponent;
