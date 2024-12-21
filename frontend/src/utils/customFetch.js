import axios from "axios";

const baseURL =
    process.env.NODE_ENV === "production" ? "/api/v1" : "http://192.168.100.85:3000/api/v1";

const customFetch = axios.create({
    baseURL: baseURL,
});

customFetch.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            window.location.href = "/authentification";
        }
        return Promise.reject(error);
    }
);

export default customFetch;
