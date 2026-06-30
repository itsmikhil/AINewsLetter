import axios from "axios";

const api = axios.create({
    baseURL: "https://api.weeklybrief.in/api"
});

export default api;