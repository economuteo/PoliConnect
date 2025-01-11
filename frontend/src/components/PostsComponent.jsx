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
    const [posts, setPosts] = useState(mostRecentPost ? [mostRecentPost] : []);
    const [totalFetchedPosts, setTotalFetchedPosts] = useState(posts.length);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loadMoreVisible, setLoadMoreVisible] = useState(true);
    const [loading, setLoading] = useState(false);

    return (
        <Wrapper>
            {errorMessage && <p id="errorMessage">{errorMessage}</p>}
            {posts.length === 0 && <p id="noPostsMessage">No posts were made yet!</p>}
            {posts.map((post, index) =>
                post.typeOfPost === "EventPost" ? (
                    <EventPostComponent key={post._id || index} eventPost={post} />
                ) : (
                    <PhotoPostComponent key={post._id || index} photoPost={post} />
                )
            )}
            {loading && (
                <div id="loadingDiv">
                    <ClipLoader color="#ffffff" size={50} />
                </div>
            )}
            {loadMoreVisible && !loading && (
                <button
                    id="loadMoreButton"
                    onClick={async () => {
                        if (loading) return;
                        try {
                            setLoading(true);

                            const response = await customFetch.post(
                                `/posts/getNoOfPostsForTheCurrentUser`,
                                {
                                    totalFetchedPosts,
                                }
                            );
                            const newPosts = response.data.posts;

                            if (newPosts.length === 0) {
                                setLoadMoreVisible(false);
                                return;
                            } else {
                                setPosts([...posts, ...newPosts]);
                                setTotalFetchedPosts(totalFetchedPosts + newPosts.length);
                            }
                        } catch (error) {
                        } finally {
                            setLoading(false);
                        }
                    }}>
                    Load More
                </button>
            )}
        </Wrapper>
    );
};

export default PostsComponent;
