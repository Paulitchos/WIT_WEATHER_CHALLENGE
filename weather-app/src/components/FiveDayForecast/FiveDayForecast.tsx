import React from "react";
import {
  ForecastContainer,
  ForecastDay,
  DateLabel,
  TemperatureRange,
  TemperatureValue,
  Condition,
  WeatherIcon,
} from "./FiveDayForecast.styles";

interface ForecastProps {
  forecast: Array<{
    dt_txt: string;
    main: { temp_min: number; temp_max: number };
    weather: Array<{ icon: string; description: string }>;
  }>;
  unit: "metric" | "imperial";
}

const Forecast: React.FC<ForecastProps> = ({ forecast, unit }) => {
  // Helper function to group forecast data by day
  const groupForecastByDay = (forecast: any[]) => {
    const groupedData: { [key: string]: any } = {};

    forecast.forEach((item) => {
      const date = new Date(item.dt_txt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      if (!groupedData[date]) {
        groupedData[date] = {
          date,
          minTemp: item.main.temp_min,
          maxTemp: item.main.temp_max,
          weather: item.weather[0],
        };
      } else {
        // Update min and max temperatures for the day
        groupedData[date].minTemp = Math.min(
          groupedData[date].minTemp,
          item.main.temp_min
        );
        groupedData[date].maxTemp = Math.max(
          groupedData[date].maxTemp,
          item.main.temp_max
        );
      }
    });

    return Object.values(groupedData);
  };

  // Group forecast data by day
  const dailyForecast = groupForecastByDay(forecast);

  // Helper function to get weather icon
  const getWeatherIcon = (iconCode: string) => (
    <img
      src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
      alt="Weather icon"
      width={50}
      height={50}
    />
  );

  return (
    <ForecastContainer>
      <h2>5-Day Forecast</h2>
      {dailyForecast.map((day, index) => (
        <ForecastDay key={index}>
          <DateLabel>
            {new Date(day.date).toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </DateLabel>
          <TemperatureRange>
            <TemperatureValue>
              <WeatherIcon>{getWeatherIcon(day.weather.icon)}</WeatherIcon>
              {Math.round(day.maxTemp)}°{unit === "metric" ? "C" : "F"} /{" "}
              {Math.round(day.minTemp)}°{unit === "metric" ? "C" : "F"}
            </TemperatureValue>
            <Condition>
              {day.weather.description
                .split(" ")
                .map(
                  (word: string) =>
                    word.charAt(0).toUpperCase() + word.slice(1)
                )
                .join(" ")}
            </Condition>
          </TemperatureRange>
        </ForecastDay>
      ))}
    </ForecastContainer>
  );
};

export default Forecast;