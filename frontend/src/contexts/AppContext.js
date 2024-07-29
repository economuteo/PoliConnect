import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [removeNavbar, setRemoveNavbar] = useState(false);

    return (
        <AppContext.Provider value={{ removeNavbar, setRemoveNavbar }}>
            {children}
        </AppContext.Provider>
    );
};
