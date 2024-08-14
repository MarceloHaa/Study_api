import React from 'react';
import styles from './Card.module.css';

const Card = ({ image, value, suit, flipped }) => {
    const cardImage = flipped
        ? image
        : 'https://deckofcardsapi.com/static/img/back.png';
    return (
        <div>
            <img
                className={styles['card-image']}
                src={cardImage}
                alt={`${value} of ${suit}`}
            />
        </div>
    );
};

export default Card;
