import axios from 'axios';

export const api = axios.create({
    baseURL: "http://localhost:8093/api/v1/",
})