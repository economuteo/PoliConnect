import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Navbar removal
    const [removeNavbar, setRemoveNavbar] = useState(false);

    // Verify email call
    const [comingFrom, setComingFrom] = useState("");

    // Image URL
    const [imageUrl, setImageUrl] = useState("");

    // File
    const [file, setFile] = useState("");

    // Story logic
    // Finish story component
    const [isTextVisible, setIsTextVisible] = useState(false);

    // Stories URL
    const [userStoriesUrls, setUserStoriesUrls] = useState([]);

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
                userStoriesUrls,
                setUserStoriesUrls,
            }}>
            {children}
        </AppContext.Provider>
    );
};
