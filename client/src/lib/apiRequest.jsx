import axios from "axios";


const username = import.meta.env.VITE_SECURITY_USERNAME;
const password = import.meta.env.VITE_SECURITY_PASS;
const token = btoa(`${username}:${password}`);

const apiRequest = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        'Authorization': `Basic ${token}`
    },
    withCredentials: true
});

export default apiRequest