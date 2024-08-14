import axios from "axios";

const API_KEY = "77faff76950df7bc1ff129ac4bcd761e";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getCityCoordinates = async (cityName) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: cityName,
        appid: API_KEY,
      },
    });
    return response.data.coord;
  } catch (error) {
    console.error("Error fetching city coordinates:", error);
    return null;
  }
};

export const getWeatherForecast = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather forecast:", error);
    return null;
  }
};
