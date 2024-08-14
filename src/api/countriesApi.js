import axios from "axios";

export const getCountriesData = async (filterType, filterValue) => {
  const url = "https://restcountries.com/v3.1/all";

  try {
    const response = await axios.get(url);
    const countries = response.data;

    const filteredCountries = countries.filter((country) => {
      switch (filterType) {
        case "region":
          return country.region.toLowerCase() === filterValue.toLowerCase();
        case "subregion":
          return country.subregion?.toLowerCase() === filterValue.toLowerCase();
        case "currency":
          return (
            country.currencies &&
            Object.keys(country.currencies).some(
              (currency) => currency.toLowerCase() === filterValue.toLowerCase()
            )
          );
        case "language":
          return (
            country.languages &&
            Object.values(country.languages).some(
              (language) => language.toLowerCase() === filterValue.toLowerCase()
            )
          );
        case "name":
          return country.name.common
            .toLowerCase()
            .includes(filterValue.toLowerCase());
        default:
          return false;
      }
    });

    return filteredCountries.map((country) => ({
      name: country.name.common,
      region: country.region,
      subregion: country.subregion,
      currency: country.currencies ? Object.keys(country.currencies)[0] : "N/A",
      population: country.population,
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
