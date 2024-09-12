import axios from 'axios';

const API_KEY = '21abb5de';
const BASE_URL = 'http://www.omdbapi.com/';

export const searchMovies = async (query) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                s: query,
                apikey: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar filmes', error);
        return null;
    }
};
export const getMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                i: movieId,
                apikey: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error);
        return null;
    }
};
