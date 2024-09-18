import React, { useEffect, useState } from "react";
import { EventComponent } from "../components";
import { customFetch } from "../utils/customFetch";

export const firstPostLoader = async () => {
    const response = await customFetch.get("/posts/firstPost");
    return response.data;
};

const PostsComponent = () => {
    const [firstPost, setFirstPost] = useState(null);
    const [combinedData, setCombinedData] = useState([]);
    const [batch, setBatch] = useState(0);
    const batchSize = 10;

    useEffect(() => {
        const fetchFirstPost = async () => {
            try {
                const firstPostData = await firstPostLoader();
                setFirstPost(firstPostData);
            } catch (error) {
                console.error("Error fetching first post:", error);
            }
        };

        fetchFirstPost();
    }, []);

    useEffect(() => {
        const fetchBatch = async () => {
            try {
                const [postsResponse, eventsResponse] = await Promise.all([
                    customFetch.get(`/posts?skip=${batch * batchSize}&limit=${batchSize}`),
                    customFetch.get(`/events?skip=${batch * batchSize}&limit=${batchSize}`),
                ]);

                const posts = postsResponse.data;
                const events = eventsResponse.data;

                const combined = [...posts, ...events];

                // Sort combined data by creation date (assuming 'createdAt' field exists)
                combined.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                setCombinedData((prevData) => [...prevData, ...combined]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (batch > 0) {
            fetchBatch();
        }
    }, [batch]);

    const loadMore = () => {
        setBatch((prevBatch) => prevBatch + 1);
    };

    return (
        <section>
            {firstPost && <EventComponent data={firstPost} />}
            {combinedData.map((item, index) => (
                <EventComponent key={index} data={item} />
            ))}
            <button onClick={loadMore}>Load More</button>
        </section>
    );
};

export default PostsComponent;
