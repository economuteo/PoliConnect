import { useState, useEffect, useCallback } from "react";

const useCountdownTimer = (initialTime) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [expired, setExpired] = useState(false);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timerId);
        } else {
            setExpired(true);
        }
    }, [timeLeft]);

    const resetTimer = useCallback(() => {
        setTimeLeft(initialTime);
        setExpired(false);
    }, [initialTime]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

    return { timeLeft, formatTime, expired, resetTimer };
};

export default useCountdownTimer;
