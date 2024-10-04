import axios from "axios";

const customFetch = axios.create({
    baseURL: "http://192.168.1.123:3000/api/v1",
    // baseURL: "http://192.168.1.123:3000/api/v1",
});

export default customFetch;
