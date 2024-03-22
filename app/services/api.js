import axios from "axios";
import { API_URL } from "../utils";

const api = axios.create({
    baseURL: API_URL,
});

export const fetchUserAPI = () => api.get('/users');
