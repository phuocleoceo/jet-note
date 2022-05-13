import axios from 'axios';

const BASE_URL = "";

const apiQuizz = axios.create({
    baseURL: BASE_URL,
    headers: {
        'content-type': 'application/json'
    },
});

apiQuizz.interceptors.request.use((config) =>
{
    return config;
}, (error) =>
{
    return Promise.reject(error);
});

apiQuizz.interceptors.response.use((response) =>
{
    return response;
}, async (error) =>
{
    return Promise.reject(error);
});

export default apiQuizz;