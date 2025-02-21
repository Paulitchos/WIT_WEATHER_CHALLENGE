import styled from "styled-components";

// WEATHER CONTAINER (GRID LAYOUT)
export const WeatherContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Default: Single column (mobile-first) */
  grid-template-rows: auto auto;
  gap: 1.5rem;
  padding: 1.5rem;
  max-width: 45%;
  margin: auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr; /* Two columns for weather & map */
    grid-template-rows: auto auto; /* Weather & Map in first row, Graph in second */
    align-items: center;
  }
`;

// CURRENT WEATHER (LEFT SIDE)
export const CurrentWeather = styled.div`
  text-align: center;
  max-width: 100%; /* Ensures it doesn't shrink */
  margin: auto;

  @media (max-width: 768px) {
    grid-column: span 1;
    width: 100%;
    min-height: auto;
  }
`;

// WEATHER TEMP (Holds Temp & Icon)
export const CurrentWeatherTemp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// WEATHER ICON
export const WeatherIcon = styled.div`
  margin: 1rem 0;
`;

// WEATHER MAP CONTAINER (RIGHT SIDE)
export const WeatherMapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* Ensure it takes full available space */
  min-height: 400px;

  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
  }
`;

// WEATHER GRAPH CONTAINER (FULL WIDTH ROW)
export const WeatherGraphContainer = styled.div`
  grid-column: span 1; /* Makes it take full grid width on larger screens */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  width: 100%; /* 70% width on larger screens */
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-column: span 1; /* Single column for smaller screens */
    width: 100%; /* Full width on mobile */
  }
`;

export const WeatherForecastContainer = styled.div`
  grid-column: span 1; /* Makes it take full grid width on larger screens */
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  width: 100%;

  @media (max-width: 768px) {
    grid-column: span 1; /* Single column for smaller screens */
    width: 100%; /* Full width on mobile */
  }
`;
