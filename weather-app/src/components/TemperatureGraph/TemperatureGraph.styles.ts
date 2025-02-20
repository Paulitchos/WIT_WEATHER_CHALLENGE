import styled from "styled-components";

// Container for the graph (remains full width)
export const GraphContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

// Title above the graph
export const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Wrapper for the chart with fixed height that adjusts on mobile only
export const ChartWrapper = styled.div`
  width: 100%;
  height: 400px;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;
