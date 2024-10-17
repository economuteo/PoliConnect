import axios from "axios";

const baseURL =
    process.env.NODE_ENV === "production"
        ? "https://policonnect.onrender.com/api/v1"
        : "http://localhost:3000/api/v1";

const customFetch = axios.create({
    baseURL: baseURL,
});

export default customFetch;
