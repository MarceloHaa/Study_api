import React, { useState } from "react";
import { getCityCoordinates, getWeatherForecast } from "../api/openWeatherApi";
import WeatherDetails from "../components/previsaoTempo/WeatherDetails";
import Button from "../components/layout/Button";
import styles from "./Previsao.module.css";

const Previsao = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    const coordinates = await getCityCoordinates(cityName);
    if (coordinates) {
      const weather = await getWeatherForecast(
        coordinates.lat,
        coordinates.lon
      );
      setWeatherData(weather);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.container}>
      <h1>Previsão do Tempo</h1>
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Digite o nome da Cidade ou Pais"
      />
      <Button onClick={handleSearch}>Pesquisar</Button>

      <WeatherDetails weatherData={weatherData} />
    </div>
  );
};

export default Previsao;
