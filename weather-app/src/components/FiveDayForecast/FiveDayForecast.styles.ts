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

  @media (max-width: 768px) {
    gap: 0.5rem;
    padding: 1rem;
  }
`;

export const ForecastDay = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
  gap: 2rem;

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
  min-width: 150px; /* Fixed width so the condition always starts at the same horizontal position */

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

  @media (max-width: 768px) {
    margin-right: 0.3rem;
  }
`;
