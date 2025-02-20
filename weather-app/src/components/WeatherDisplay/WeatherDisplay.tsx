// src/components/WeatherDisplay/WeatherDisplay.tsx
import React from "react";
import {
  WeatherContainer,
  CurrentWeather,
  CurrentWeatherTemp,
  WeatherIcon,
} from "./WeatherDisplay.styles";

interface WeatherDisplayProps {
  data: any;
  unit: "metric" | "imperial";
}

const WeatherDisplay = ({ data, unit }: WeatherDisplayProps) => {
  const currentWeather = data.list[0];
  const forecast = data.list;

  // Helper function to get weather icon based on condition
  const getWeatherIcon = (iconCode: string) => {
    return (
      <img
        src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
        alt="Weather icon"
        width={50}
        height={50}
      />
    );
  };

  return (
    <WeatherContainer>
      <CurrentWeather>
        <h1>{data.city.name}</h1>
        <CurrentWeatherTemp>
          <WeatherIcon>
            {getWeatherIcon(currentWeather.weather[0].icon)}
          </WeatherIcon>
          <h2>
            {Math.round(currentWeather.main.temp)}°
            {unit === "metric" ? "C" : "F"}
          </h2>
        </CurrentWeatherTemp>
        <p>
          Feels like {Math.round(currentWeather.main.feels_like)}°
          {unit === "metric" ? "C" : "F"}.{" "}
          {currentWeather.weather[0].description
            .split(" ")
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </p>
      </CurrentWeather>

      <h3>5-Day Forecast</h3>
      <ul>
        {forecast.map((item: any, index: number) => (
          <li key={index}>
            <p>Date/Time: {item.dt_txt}</p>
            <p>
              Temperature: {item.main.temp}°{unit === "metric" ? "C" : "F"}
            </p>
            <p>Condition: {item.weather[0].description}</p>
          </li>
        ))}
      </ul>
    </WeatherContainer>
  );
};

export default WeatherDisplay;
