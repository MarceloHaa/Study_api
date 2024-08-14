import React from 'react';
import './CharacterList.css';
import Button from '../layout/Button';

const CharacterList = ({ characters, onDetailClick }) => {
    return (
        <div>
            <h1>Personagens de Harry Potter </h1>
            <ul className="character-list">
                {characters.map((character, index) => (
                    <li key={index}>
                        <p>
                            <strong>Nome : </strong>
                            {character.name}
                        </p>
                        <p>
                            <strong>Casa : </strong>
                            {character.house}
                        </p>
                        <Button onClick={() => onDetailClick(character.name)}>
                            Mostrar detalhes
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterList;
