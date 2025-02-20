//REACT
import React, { useState, useEffect } from "react";

//SERVICE
import { fetchWeatherData } from "../service/weatherService";

//COMPONENTS
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay/WeatherDisplay";
import ErrorDisplay from "../components/ErrorDisplay";

//STYLE
import styled from "styled-components";

const HomePage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [city, setCity] = useState(""); // Store the city name separately

  // Fetch weather data when the city or unit changes
  useEffect(() => {
    if (city) {
      handleSearch(city);
    }
  }, [unit]); // Re-fetch when `unit` changes

  const handleSearch = async (city: string) => {
    setCity(city); // Save the city name
    try {
      const data = await fetchWeatherData(city, unit);
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError(
        "Failed to fetch weather data. Please check the city name and try again."
      );
      setWeatherData(null);
    }
  };

  const handleUnitChange = (newUnit: "metric" | "imperial") => {
    setUnit(newUnit);
  };

  return (
    <div>
      <SearchBar
        onSubmit={handleSearch}
        onUnitChange={handleUnitChange}
        unit={unit}
      />
      {error && <ErrorDisplay message={error} />}
      {weatherData && <WeatherDisplay data={weatherData} unit={unit} />}
    </div>
  );
};

export default HomePage;
