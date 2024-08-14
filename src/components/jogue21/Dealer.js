import React from 'react';
import Card from './Card';
import styles from './Dealer.module.css';

const Dealer = ({ cards, hiddenCard, flipped }) => {
    return (
        <div className={styles.container}>
            <h2>Dealer</h2>
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
                {hiddenCard && (
                    <Card
                        image="https://deckofcardsapi.com/static/img/back.png"
                        value="Hidden"
                        suit=""
                    />
                )}
            </div>
        </div>
    );
};

export default Dealer;
