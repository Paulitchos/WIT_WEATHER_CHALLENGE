import styled from "styled-components";

// WEATHER CONTAINER
export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin: auto 0;
`;

// CURRENT WEATHER
export const CurrentWeather = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 0 5rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 2rem;
    margin: 1.1rem 0.5rem;
  }

  p {
    font-size: 1.25rem;
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 2rem;
      margin: 1.1rem 0.5rem;
    }

    p {
      font-size: 1.25rem;
      margin: 0.5rem 0;
    }
  }

  @media (max-width: 480px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 0rem;
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 2rem;
      margin: 1.3rem 0.5rem;
    }

    p {
      font-size: 1.25rem;
      margin: 0.5rem 0;
    }
  }
`;

// CURRENT WEATHER TEMP
export const CurrentWeatherTemp = styled.div`
  display: flex;
  flex-direction: row; /* Keep row layout for larger screens */
  text-align: left;

  @media (max-width: 480px) {
    text-align: center; /* Center text */
    align-items: center; /* Ensure elements are centered */
    justify-content: center; /* Center them inside the div */
  }
`;

// WEATHER ICON
export const WeatherIcon = styled.div`
  margin: 1rem 0;
`;