import React, { useState, useEffect } from 'react';

import { getAllCharacters } from '../api/harryPotterApi';

import CharacterList from '../components/harryPotter/CharacterList';
import CharacterDetails from '../components/harryPotter/CharacterDetails';
import Erro from '../components/Erro';

import './HarryPotter.css';

const HarryPotter = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [showError, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllCharacters();
                setCharacters(response.data);
                setError(false);
            } catch (error) {
                setError(true);
                console.error('Error ao buscar personagem:', error);
            }
        };

        fetchData();
    }, []);

    const handleDetailClick = (name) => {
        const character = characters.find((char) => char.name === name);
        setSelectedCharacter(character);
    };
    const handleBackClick = () => {
        setSelectedCharacter(null);
    };

    return (
        <div className="harry-potter">
            {!selectedCharacter ? (
                <CharacterList
                    characters={characters}
                    onDetailClick={handleDetailClick}
                />
            ) : (
                <CharacterDetails
                    character={selectedCharacter}
                    onBackClick={handleBackClick}
                />
            )}
            <Erro showError={showError} />
        </div>
    );
};

export default HarryPotter;
