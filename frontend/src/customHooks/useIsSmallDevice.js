import { useState, useEffect } from "react";

const useIsSmallDevice = () => {
    const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallDevice(window.innerWidth < 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isSmallDevice;
};

export default useIsSmallDevice;
