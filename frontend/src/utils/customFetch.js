import axios from "axios";

const customFetch = axios.create({
    // baseURL: "http://localhost:3000/api/v1",
    baseURL: "http://192.168.56.1:3000/api/v1",
});

export default customFetch;
