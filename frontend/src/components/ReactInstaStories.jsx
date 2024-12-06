import Stories from "react-insta-stories";

const stories = [
    "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1723238513/cld-sample-3.jpg",
    "https://res.cloudinary.com/diydmnphf/image/upload/f_webp/v1723238513/cld-sample-3.jpg",
];

const ReactInstaStories = () => {
    return <Stories stories={stories} defaultInterval={1500} width={432} height={768} />;
};

export default ReactInstaStories;
