import React from 'react';

interface WeatherDisplayProps {
  data: any;
  unit: 'metric' | 'imperial';
}

const WeatherDisplay = ({ data, unit }: WeatherDisplayProps) => {
  const currentWeather = data.list[0];
  const forecast = data.list;

  return (
    <div>
      <h2>Current Weather in {data.city.name}</h2>
      <p>Temperature: {currentWeather.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>Condition: {currentWeather.weather[0].description}</p>
      <h3>5-Day Forecast</h3>
      <ul>
        {forecast.map((item: any, index: number) => (
          <li key={index}>
            <p>Date/Time: {item.dt_txt}</p>
            <p>Temperature: {item.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
            <p>Condition: {item.weather[0].description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherDisplay;