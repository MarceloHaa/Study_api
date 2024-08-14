import React from 'react';
import CountryFlag from './CountryFlag';
import styles from './WeatherDetails.module.css';

const WeatherDetails = ({ weatherData }) => {
    if (!weatherData) {
        return null;
    }

    return (
        <div className={styles.container}>
            <h2>
                {weatherData.city.name}, {weatherData.city.country}
            </h2>
            <CountryFlag countryCode={weatherData.city.country} />
            <p>Temperatura: {weatherData.list[0].main.temp}°C</p>
            <p>Clima: {weatherData.list[0].weather[0].description}</p>
        </div>
    );
};

export default WeatherDetails;
