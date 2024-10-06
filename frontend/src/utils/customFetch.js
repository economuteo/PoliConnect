import axios from "axios";

const customFetch = axios.create({
    baseURL: "http://192.168.100.85:3000/api/v1",
    // baseURL: "http://192.168.100.85:3000/api/v1",
});

export default customFetch;
