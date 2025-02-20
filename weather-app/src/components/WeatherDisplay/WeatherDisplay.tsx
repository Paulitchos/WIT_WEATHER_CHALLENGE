import React from "react";
import TemperatureMap from "../TemperatureMap";
import {
  WeatherContainer,
  CurrentWeather,
  CurrentWeatherTemp,
  WeatherIcon,
  WeatherMapContainer,
  WeatherGraphContainer, // New container for the graph
} from "./WeatherDisplay.styles";
import TemperatureGraph from "../TemperatureGraph";

interface WeatherDisplayProps {
  data: any;
  unit: "metric" | "imperial";
  lat: number;
  lon: number;
}

const WeatherDisplay = ({ data, unit, lat, lon }: WeatherDisplayProps) => {
  const currentWeather = data.list[0];

  // Function to get weather icon
  const getWeatherIcon = (iconCode: string) => (
    <img
      src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
      alt="Weather icon"
      width={50}
      height={50}
    />
  );

  return (
    <WeatherContainer>
      {/* Weather Information */}
      <CurrentWeather>
        <h1>{data.city.name}</h1>
        <CurrentWeatherTemp>
          <WeatherIcon>{getWeatherIcon(currentWeather.weather[0].icon)}</WeatherIcon>
          <h2>
            {Math.round(currentWeather.main.temp)}°{unit === "metric" ? "C" : "F"}
          </h2>
        </CurrentWeatherTemp>
        <p>
          Feels like {Math.round(currentWeather.main.feels_like)}°{unit === "metric" ? "C" : "F"}.{" "}
          {currentWeather.weather[0].description
            .split(" ")
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </p>
      </CurrentWeather>

      {/* Weather Map */}
      <WeatherMapContainer>
        <TemperatureMap latitude={lat} longitude={lon} />
      </WeatherMapContainer>
      
      {/* Weather Graph Container - Positioned below current weather */}
      <WeatherGraphContainer>
        <TemperatureGraph forecast={data.list} unit={unit} />
      </WeatherGraphContainer>
    </WeatherContainer>
  );
};

export default WeatherDisplay;
