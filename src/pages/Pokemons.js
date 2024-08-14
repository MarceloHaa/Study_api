import React, { useState } from 'react';
import { fetchPokemon } from '../api/pokemonApi';
import Button from '../components/layout/Button';
import PokemonDetails from '../components/pokemon/PokemonDetails';
import Erro from '../components/Erro';
import styles from '../pages/Pokemons.module.css';

function Pokemons() {
    const [pokemon, setPokemon] = useState(null);
    const [search, setSearch] = useState('');
    const [showError, setError] = useState(false);

    const handleSearch = async () => {
        try {
            const data = await fetchPokemon(search);
            setPokemon(data);
            setError(false);
        } catch (error) {
            setError(true);
            console.error('Pokemon não encontrado', error);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className={styles.container}>
            <h1>Pokemons</h1>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escreva o nome ou número"
            />
            <Button onClick={handleSearch}>Procurar</Button>
            <Erro showError={showError} />
            <PokemonDetails pokemon={pokemon} />
        </div>
    );
}

export default Pokemons;
