import React from 'react';
import './CharacterDetails.css';
import Button from '../layout/Button';

const CharacterDetails = ({ character, onBackClick }) => {
    return (
        <div className="character-details">
            <h2 className="title">{character.name}</h2>

            <p>
                <img src={character.image} alt={character.name} />
            </p>

            <p>
                <strong>Casa : </strong>
                {character.house}
            </p>
            <p>
                <strong>Especie : </strong>
                {character.species}
            </p>
            <p>
                <strong>Genero : </strong>
                {character.gender}
            </p>
            <p>
                <strong>Data de aniversário : </strong>
                {character.dateOfBirth}
            </p>
            <p>
                <strong>Ancestral : </strong>
                {character.ancestry}
            </p>
            <p>
                <strong>Cor do olho : </strong>
                {character.eyeColour}
            </p>
            <p>
                <strong>Cor do cabelo : </strong>
                {character.hairColour}
            </p>
            <p>
                <strong>Patronus : </strong>
                {character.patronus}
            </p>
            <p>
                <strong>Ator : </strong>
                {character.actor}
            </p>
            <Button onClick={onBackClick}>Voltar</Button>
        </div>
    );
};

export default CharacterDetails;
