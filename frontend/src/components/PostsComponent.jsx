import React, { useEffect, useState } from "react";
import { EventPostComponent, PhotoPostComponent } from "../components";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/PostsComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState([]);
    const [lastTap, setLastTap] = useState(0);
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

    const handleDoubleClick = (postId) => {};

    const handleTouch = (postId) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;

        if (tapLength < 500 && tapLength > 0) {
            handleDoubleClick(postId);
        }

        setLastTap(currentTime);
    };

    return (
        <Wrapper>
            {error && <div>Error: {error}</div>}
            {posts === null && <div>Loading...</div>}
            {posts?.length === 0 && <div>No posts available.</div>}
            {posts?.map((post) =>
                post.typeOfPost === "EventPost" ? (
                    <EventPostComponent
                        key={post._id}
                        eventPost={post}
                        onDoubleClick={() => handleDoubleClick(post._id)}
                        onTouch={() => handleTouch(post._id)}
                    />
                ) : (
                    <PhotoPostComponent
                        key={post._id}
                        photoPost={post}
                        onDoubleClick={() => handleDoubleClick(post._id)}
                        onTouch={() => handleTouch(post._id)}
                    />
                )
            )}
        </Wrapper>
    );
};

export default PostsComponent;
