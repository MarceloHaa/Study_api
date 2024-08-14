import axios from 'axios';

const API_BASE = 'https://deckofcardsapi.com/api/deck';

export const shuffleDeck = async () => {
    const response = await axios.get(`${API_BASE}/new/shuffle/?deck_count=1`);
    return response.data;
};

export const drawCards = async (deckId, count) => {
    const response = await axios.get(
        `${API_BASE}/${deckId}/draw/?count=${count}`
    );
    return response.data;
};
