import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Navbar removal
    const [removeNavbar, setRemoveNavbar] = useState(false);

    // Verify email call
    const [comingFrom, setComingFrom] = useState("");

    return (
        <AppContext.Provider value={{ removeNavbar, setRemoveNavbar, comingFrom, setComingFrom }}>
            {children}
        </AppContext.Provider>
    );
};
