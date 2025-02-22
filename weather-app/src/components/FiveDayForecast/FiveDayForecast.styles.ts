import styled from "styled-components";

//FORECAST THEME COLORS
const forecastTheme = {
  background: "#f9f9f9",
  text: "#333",
  border: "#eee",
  secondaryText: "#555",
  tertiaryText: "#777",
  highlight: "#f0f0f0",
};

//FORECAST CONTAINER
export const ForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: ${forecastTheme.background};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: auto;
  min-height: 400px;
`;

//FORECAST DAY
export const ForecastDay = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid ${forecastTheme.border};
  gap: 2rem;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0.5rem 0;
  }
`;

//DATE LABEL
export const DateLabel = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${forecastTheme.text};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

//TEMPERATURE RANGE
export const TemperatureRange = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

//TEMPERATURE VALUES
export const TemperatureValue = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  color: ${forecastTheme.secondaryText};
  min-width: 150px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    min-width: 130px;
  }
`;

//WEATHER CONDITION
export const Condition = styled.div`
  font-size: 0.875rem;
  color: ${forecastTheme.tertiaryText};

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 0.6rem;
  }
`;

//WEATHER ICON
export const WeatherIcon = styled.div`
  margin-right: 0.5rem;
  align-items: center;

  @media (max-width: 768px) {
    margin-right: 0.3rem;
  }
`;

//TEMPERATURE DETAILS
export const TemperatureDetailsContainer = styled.div`
  display: flex;
  flex-direction: inline;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

//FORECAST DETAILS
export const ForecastDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  visibility: hidden; /* Initially hidden */
`;

//WEATHER INFO
export const WeatherInfo = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

//WEATHER DETAILS
export const WeatherDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

//DETAIL ITEM
export const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: ${forecastTheme.highlight};
  border-radius: 4px;
`;

//HOURLY FORECAST
export const HourlyForecast = styled.div`
  margin-top: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    background: ${forecastTheme.highlight};
    border-radius: 4px;
    margin: 0.5rem 0;
  }
`;

//TOGGLE BUTTON
export const ToggleButton = styled.button`
  background-color: ${forecastTheme.background};
  color: black;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-left: auto;
`;

//FORECAST CONTENT
export const ForecastContent = styled.div`
  position: relative;
  width: 100%;
`;