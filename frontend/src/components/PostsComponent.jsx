import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import { EventPostComponent, PhotoPostComponent } from "../components";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/PostsComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAllPostsForTheCurrentUser = async () => {
            try {
                const response = await customFetch.get("/posts/getAllPostsForAUser");
                const posts = response.data;
                setPosts(posts);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getAllPostsForTheCurrentUser();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

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
            {error && <div>Error: {error}</div>}
            {posts === null && <div>Loading...</div>}
            {posts?.length === 0 && <div>No posts available.</div>}
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
