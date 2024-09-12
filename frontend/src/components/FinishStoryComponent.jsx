import { useState, useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Stage, Layer, Text, Image } from "react-konva";

import { AppContext } from "../contexts/AppContext";

import Wrapper from "../assets/wrappers/FinishStoryComponent";

const FinishStoryComponent = () => {
    const location = useLocation();
    const { imageUrl } = location.state || {};
    const { setImageUrl } = useContext(AppContext);
    const [text, setText] = useState("");
    const { isTextVisible } = useContext(AppContext);
    const textRef = useRef(null);
    const [image, setImage] = useState(null);

    const handleTextClick = () => {
        const newText = prompt("Edit text:", text);
        if (newText !== null) {
            setText(newText);
        }
    };

    useEffect(() => {
        if (imageUrl) {
            setImageUrl(imageUrl);
            const img = new window.Image();
            img.src = imageUrl;
            img.onload = () => {
                setImage(img);
            };
        }
    }, [imageUrl, setImageUrl]);

    return (
        <Wrapper>
            <div>
                {imageUrl ? (
                    <Stage width={300} height={450}>
                        <Layer>
                            {image && (
                                <Image
                                    onClick={handleTextClick}
                                    className="story"
                                    image={image}
                                    width={300}
                                    height={450}
                                />
                            )}
                            {isTextVisible && (
                                <Text
                                    text={text || "Text"}
                                    x={50}
                                    y={50}
                                    fontSize={24}
                                    fill="white"
                                    draggable
                                    ref={textRef}
                                />
                            )}
                        </Layer>
                    </Stage>
                ) : (
                    <p>No image selected</p>
                )}
            </div>
        </Wrapper>
    );
};

export default FinishStoryComponent;
