import React from 'react';
import Card from './Card';
import styles from './Player.module.css';

const Player = ({ cards, flipped }) => {
    return (
        <div className={styles.container}>
            <h2>Jogador </h2>
            <div className={styles.cards}>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        value={card.value}
                        suit={card.suit}
                        flipped={flipped}
                    />
                ))}
            </div>
        </div>
    );
};

export default Player;
