import axios from "axios";

const api = axios.create({
    baseURL: "https://ainewsletter-2ue5.onrender.com/api"
});

export default api;