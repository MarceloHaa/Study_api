import axios from 'axios';

const API_KEY = '2b80389ea85c952b066d2e4f18ed6adc';
const BASE_URL = 'http://api.currencylayer.com/convert';

export const convertCurrency = async (fromCurrency, toCurrency, amount) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                access_key: API_KEY,
                from: fromCurrency,
                to: toCurrency,
                amount: amount,
            },
        });

        if (response.data.success) {
            const convertedAmount = response.data.result;
            return convertedAmount;
        } else {
            throw new Error(response.data.error.info);
        }
    } catch (error) {
        console.error('Erro ao converter a moeda:', error);
        throw error;
    }
};
