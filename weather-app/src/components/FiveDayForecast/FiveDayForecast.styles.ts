import styled from "styled-components";

export const ForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: auto;
  min-height: 400px; /* Fixed height to maintain size */
`;

export const ForecastDay = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
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

export const DateLabel = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const TemperatureRange = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const TemperatureValue = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  color: #555;
  min-width: 150px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    min-width: 130px;
  }
`;

export const Condition = styled.div`
  font-size: 0.875rem;
  color: #777;

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 0.6rem;
  }
`;

export const WeatherIcon = styled.div`
  margin-right: 0.5rem;
  align-items: center;
  @media (max-width: 768px) {
    margin-right: 0.3rem;
  }
`;

export const TemperatureDetailsContainer = styled.div`
  display: flex;
  flex-direction: inline;
  align-items: center; /* Center content horizontally */
  justify-content: center;
  gap: 0.5rem; /* Add spacing between icon and temperature */
`;

export const ForecastDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  visibility: hidden; /* Initially hidden */
`;

export const WeatherInfo = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const WeatherDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: #f0f0f0;
  border-radius: 4px;
`;

export const HourlyForecast = styled.div`
  margin-top: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    background: #f0f0f0;
    border-radius: 4px;
    margin: 0.5rem 0;
  }
`;

export const ToggleButton = styled.button`
  background-color: #f9f9f9;
  color: black;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; /* Fixed width for the button */
  height: 40px; /* Fixed height for the button */
  margin-left: auto; /* Push the button to the right */
`;

export const ForecastContent = styled.div`
  position: relative;
  width: 100%;
`;