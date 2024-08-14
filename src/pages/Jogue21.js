import React from 'react';
import Game from '../components/jogue21/Game';
import styles from './Jogue21.module.css';

const Jogue21 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Jogue 21</h1>
            <Game />
        </div>
    );
};

export default Jogue21;
