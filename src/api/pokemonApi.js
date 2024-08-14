import axios from 'axios';

export const fetchPokemon = async (name) => {
    try {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        return response.data;
    } catch (error) {
        console.error('Pokemon não encontrado', error);
        throw error;
    }
};
