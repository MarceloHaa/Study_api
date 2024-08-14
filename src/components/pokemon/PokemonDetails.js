import React from 'react';
import styles from '../pokemon/Pokemon.module.css';

const PokemonDetails = ({ pokemon }) => {
    if (!pokemon) return null;

    return (
        <div className={styles.pokemon_details}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <div>
                <p>
                    <strong>Nome:</strong> {pokemon.name}
                </p>
                <p>
                    <strong>Numero: </strong>
                    {pokemon.id}
                </p>
                <p>
                    <strong>Peso:</strong> {pokemon.weight}
                </p>
                <p>
                    <strong>Altura:</strong> {pokemon.height}
                </p>
                <p>
                    <strong> Tipo: </strong>
                    {pokemon.types.map((type) => type.type.name).join(', ')}
                </p>
            </div>
        </div>
    );
};

export default PokemonDetails;
