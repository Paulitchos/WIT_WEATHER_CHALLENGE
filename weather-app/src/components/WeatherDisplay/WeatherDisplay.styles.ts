import styled from "styled-components";

//WEATHER CONTAINER
export const WeatherContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Default: Single column (mobile-first) */
  grid-template-rows: auto auto;
  gap: 1.5rem;
  padding: 1.5rem;
  max-width: 100%;
  margin: auto;

  @media (min-width: 1500px) {
    grid-template-columns: 1fr 1fr; /* Two columns for weather & map */
    grid-template-rows: auto auto;
    align-items: center;
    padding: 1.5rem;
    max-width: 45%;
    margin: auto;
  }
`;

//CURRENT WEATHER
export const CurrentWeather = styled.div`
  text-align: center;
  max-width: 100%;
  margin: auto;
`;

//WEATHER TEMP
export const CurrentWeatherTemp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//WEATHER ICON
export const WeatherIcon = styled.div`
  margin: 1rem 0;
`;

//WEATHER MAP CONTAINER
export const WeatherMapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 400px;

  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
  }

  @media (max-width: 1920px) and (orientation: landscape) {
    padding: 0rem;
    max-width: 80%;
    margin: 0 5rem;
  }
`;

//WEATHER GRAPH CONTAINER
export const WeatherGraphContainer = styled.div`
  grid-column: span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1920px) and (orientation: landscape) {
    padding: 0rem;
    max-width: 80%;
    margin: 0 5rem;
  }
`;

//WEATHER FORECAST CONTAINER
export const WeatherForecastContainer = styled.div`
  grid-column: span 1;
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  width: 100%;
`;
