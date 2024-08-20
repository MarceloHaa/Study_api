import axios from 'axios';

const API_KEY = '9601dd252c6744c4afdb47f7206867a9';
const BASE_URL = 'https://newsapi.org/v2/everything';

export const fetchNews = async (query, page = 1) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: query,
                apiKey: API_KEY,
                page: page,
                pageSize: 10,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar noticias:', error);
        throw error;
    }
};
