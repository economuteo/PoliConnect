import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Navbar removal
    const [removeNavbar, setRemoveNavbar] = useState(false);

    // Verify email call
    const [comingFrom, setComingFrom] = useState("");

    // Image URL
    const [imageUrl, setImageUrl] = useState("");

    // File story
    const [file, setFile] = useState("");

    // Photo post file
    const [photoPostFile, setPhotoPostFile] = useState("");

    // Room ID
    const [roomId, setRoomId] = useState("");

    // Story logic
    // Finish story component
    const [isTextVisible, setIsTextVisible] = useState(false);

    return (
        <AppContext.Provider
            value={{
                removeNavbar,
                setRemoveNavbar,
                comingFrom,
                setComingFrom,
                imageUrl,
                setImageUrl,
                file,
                setFile,
                isTextVisible,
                setIsTextVisible,
                roomId,
                setRoomId,
            }}>
            {children}
        </AppContext.Provider>
    );
};
