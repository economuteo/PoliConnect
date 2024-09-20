import React, { useEffect, useState } from "react";
import { EventPostComponent, PhotoPostComponent } from ".";
import customFetch from "../utils/customFetch";

const PostsComponent = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAllPostsForTheCurrentUser = async () => {
            try {
                const response = await customFetch.get("/posts/getAllPostsForAUser");
                const posts = response.data;
                setPosts(posts);
            } catch (err) {
                setError(err.message);
            }
        };

        getAllPostsForTheCurrentUser();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (posts.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            {error && <div>Error: {error}</div>}
            {posts === null && <div>Loading...</div>}
            {posts?.length === 0 && <div>No posts available.</div>}
            {posts?.map((post) =>
                post.typeOfPost === "EventPost" ? (
                    <EventPostComponent key={post._id} event={post} />
                ) : (
                    <PhotoPostComponent key={post._id} post={post} />
                )
            )}
        </section>
    );
};

export default PostsComponent;
