import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LikeIconComponent } from "../components";

import CommentsIcon from "../assets/images/comments-icon.png";
import ShareIcon from "../assets/images/share-icon.png";

import customFetch from "../utils/customFetch";

import Wrapper from "../assets/wrappers/PhotoPostComponent";
import { ClipLoader } from "react-spinners";

const PhotoPostComponent = ({ photoPost }) => {
    const [navigatedOk, setNavigatedOk] = useState(false);
    const navigate = useNavigate();

    const [post, setPost] = useState(photoPost);

    const [isLoading, setIsLoading] = useState(true);
    const [isLiked, setIsLiked] = useState(false);

    const [lastTap, setLastTap] = useState(0);
    const [postLikes, setPostLikes] = useState(photoPost.likes.length);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                // Fetch user and like status concurrently
                const userPromise = customFetch.post("/users/specificUserByID", {
                    userId: post.createdBy,
                });

                const likePromise = customFetch.post("/likes/checkLikeStatus", {
                    postId: post._id,
                    typeOfPost: post.typeOfPost,
                });

                const [userResponse, likeResponse] = await Promise.all([userPromise, likePromise]);

                const specificUser = userResponse.data.user;

                setPost((prevPost) => ({
                    ...prevPost,
                    specificUsername: specificUser.username,
                    specificProfileImage: specificUser.profileImage,
                }));

                setIsLiked(likeResponse.data);
            } catch (err) {
                console.error("Error fetching post data:", err.message);
            } finally {
                setIsLoading(false); // Stop loading when all data is fetched
            }
        };

        fetchAllData();
    }, [post._id, post.typeOfPost, post.createdBy]);

    const handleLike = async (post) => {
        try {
            setIsLiked(true);
            setPostLikes(postLikes + 1);

            await customFetch.post("/likes/likePost", {
                postId: post._id,
                typeOfPost: post.typeOfPost,
            });
        } catch (err) {
            setIsLiked(false);
            setPostLikes(postLikes - 1);
        }
    };

    const handleLikeUnlike = async (post) => {
        if (isLiked) {
            try {
                setIsLiked(false);
                setPostLikes(postLikes - 1);

                await customFetch.post("/likes/unlikePost", {
                    postId: post._id,
                    typeOfPost: post.typeOfPost,
                });
            } catch (err) {
                setIsLiked(true);
                setPostLikes(postLikes + 1);
            }
        } else {
            try {
                setIsLiked(true);
                setPostLikes(postLikes + 1);

                await customFetch.post("/likes/likePost", {
                    postId: post._id,
                    typeOfPost: post.typeOfPost,
                });
            } catch (err) {
                setIsLiked(false);
                setPostLikes(postLikes - 1);
            }
        }
    };

    // Mobile logic
    const handleTouch = (post) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;

        if (tapLength < 500 && tapLength > 0) {
            if (!isLiked) {
                handleLike(post);
            }
        }

        setLastTap(currentTime);
    };

    const handleNavigateToUserProfile = async (post) => {
        if (navigatedOk) return;

        try {
            setNavigatedOk(true);
            const response = await customFetch.post(`/users/getSpecificUserByUsername`, {
                username: post.specificUsername,
            });
            const specificUser = response.data.user;

            navigate(`userProfile/${post.specificUsername}`, { state: { user: specificUser } });
        } catch (error) {
            setNavigatedOk(false);
        }
    };

    const goToLikesPage = async (post) => {
        const response = await customFetch.post("/likes/getUsersThatLikedThePost", {
            postId: post._id,
            typeOfPost: post.typeOfPost,
        });

        const users = response.data;

        navigate("/likes", { state: { users } });
    };

    if (isLoading) {
        return (
            <Wrapper>
                <div id="clipLoaderWrapper">
                    <ClipLoader color="#0677E8" loading={isLoading} size={35} />
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <div
                className="postCreatorBasicInformation"
                onClick={() => handleNavigateToUserProfile(post)}>
                <img id="userProfileImage" src={post.specificProfileImage} alt="" />
                <p id="userUsername">{post.specificUsername}</p>
            </div>

            <div
                className="postContent"
                onDoubleClick={() => {
                    if (!isLiked) {
                        handleLike(post);
                    }
                }}
                onTouchEnd={() => handleTouch(post)}>
                <img id="photo" src={post.mediaUrl} alt="" />
            </div>

            {post.description && (
                <div className="postDescription">
                    <span id="descriptionSection">
                        <span id="descriptionUserUsername">{post.specificUsername}</span>
                        {post.description}
                    </span>
                </div>
            )}

            <div className="postReactions">
                <div className="reaction">
                    <div onClick={() => handleLikeUnlike(post)}>
                        <LikeIconComponent fill={isLiked ? "#0677E8" : ""} />
                    </div>
                    <p onClick={() => goToLikesPage(post)}>{postLikes}</p>
                </div>
                {/* <div className="reaction">
                    <img src={CommentsIcon} alt="" />
                    <p>{post.comments.length}</p>
                </div>
                <img src={ShareIcon} alt="" /> */}
            </div>
        </Wrapper>
    );
};

export default PhotoPostComponent;
