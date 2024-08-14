import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hp-api.onrender.com/api',
});

export const getAllCharacters = () => {
    return api.get('/characters');
};
