import React, { useState } from "react";

//ICONS
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

//STYLES
import {
  ForecastContainer,
  ForecastDay,
  DateLabel,
  TemperatureRange,
  TemperatureValue,
  Condition,
  WeatherIcon,
  ForecastDetails,
  WeatherInfo,
  WeatherDetails,
  DetailItem,
  ToggleButton,
  ForecastContent,
  TemperatureDetailsContainer,
} from "./FiveDayForecast.styles";

//TYPES
interface ForecastProps {
  forecast: Array<{
    dt_txt: string;
    main: {
      temp_min: number;
      temp_max: number;
      humidity: number;
      pressure: number;
    };
    weather: Array<{ icon: string; description: string }>;
    wind: { speed: number };
    pop: number;
  }>;
  unit: "metric" | "imperial";
}

const Forecast: React.FC<ForecastProps> = ({ forecast, unit }) => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  //Helper function to group forecast data by day
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
          humidity: item.main.humidity,
          windSpeed: item.wind.speed,
          pressure: item.main.pressure,
          precipitation: item.pop * 100,
          hourly: [],
        };
      } else {
        //Update min and max temperatures for the day
        groupedData[date].minTemp = Math.min(
          groupedData[date].minTemp,
          item.main.temp_min
        );
        groupedData[date].maxTemp = Math.max(
          groupedData[date].maxTemp,
          item.main.temp_max
        );
      }

      //Add hourly data for the selected day
      groupedData[date].hourly.push({
        time: new Date(item.dt_txt).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
        temperature: item.main.temp,
        feelsLike: item.main.feels_like,
      });
    });

    return Object.values(groupedData);
  };

  //Group forecast data by day
  const dailyForecast = groupForecastByDay(forecast);

  //Helper function to get weather icon
  const getWeatherIcon = (iconCode: string) => (
    <img
      src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
      alt="Weather icon"
      width={50}
      height={50}
    />
  );

  //Find the selected day's data
  const selectedDayData = dailyForecast.find((day) => day.date === selectedDay);

  return (
    <ForecastContainer>
      <h2>5-Day Forecast</h2>
      <ForecastContent>
        {/* 5-Day Forecast (Hidden when details are shown) */}
        <div style={{ visibility: selectedDay ? "hidden" : "visible" }}>
          {dailyForecast.map((day, index) => (
            <ForecastDay key={index} onClick={() => setSelectedDay(day.date)}>
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
              <FaChevronDown style={{ marginLeft: "auto" }} />{" "}
            </ForecastDay>
          ))}
        </div>

        {/* Detailed Forecast (Shown when a day is clicked) */}
        {selectedDay && (
          <ForecastDetails
            style={{ visibility: selectedDay ? "visible" : "hidden" }}
          >
            <ToggleButton onClick={() => setSelectedDay(null)}>
              <FaChevronUp style={{ marginLeft: "auto" }} />{" "}
            </ToggleButton>
            <WeatherInfo>
              <h2>
                {selectedDayData?.weather.description
                  .split(" ")
                  .map(
                    (word: string) =>
                      word.charAt(0).toUpperCase() + word.slice(1)
                  )
                  .join(" ")}
              </h2>
              <TemperatureDetailsContainer>
                <WeatherIcon>
                  {getWeatherIcon(selectedDayData?.weather.icon)}
                </WeatherIcon>
                <TemperatureValue>
                  {Math.round(selectedDayData?.maxTemp)}°
                  {unit === "metric" ? "C" : "F"} /{" "}
                  {Math.round(selectedDayData?.minTemp)}°
                  {unit === "metric" ? "C" : "F"}
                </TemperatureValue>
              </TemperatureDetailsContainer>
            </WeatherInfo>

            <WeatherDetails>
              <DetailItem>
                <span>Humidity</span>
                <span>{selectedDayData?.humidity}%</span>
              </DetailItem>
              <DetailItem>
                <span>Wind Speed</span>
                <span>{selectedDayData?.windSpeed}m/s</span>
              </DetailItem>
              <DetailItem>
                <span>Pressure</span>
                <span>{selectedDayData?.pressure}hPa</span>
              </DetailItem>
              <DetailItem>
                <span>Precipitation</span>
                <span>{selectedDayData?.precipitation.toFixed(1)}%</span>
              </DetailItem>
            </WeatherDetails>
          </ForecastDetails>
        )}
      </ForecastContent>
    </ForecastContainer>
  );
};

export default Forecast;
