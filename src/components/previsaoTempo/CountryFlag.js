import React from 'react';
import styles from './CountryFlag.module.css';

const CountryFlag = ({ countryCode }) => {
    const flagUrl = `https://flagsapi.com/${countryCode}/shiny/64.png`;

    return (
        <img
            className={styles.flag}
            src={flagUrl}
            alt={`Bandeira de ${countryCode}`}
        />
    );
};

export default CountryFlag;
