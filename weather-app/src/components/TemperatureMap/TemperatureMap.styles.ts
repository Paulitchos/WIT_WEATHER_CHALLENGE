import styled from "styled-components";

//MAP CONTAINER
export const MapContainer = styled.div`
  height: 500px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

//LEGEND CONTAINER
export const LegendContainer = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-family: Arial, sans-serif;
  font-size: 12px;
  text-align: center;
`;

//GRADIENT BAR
export const GradientBar = styled.div`
  width: 150px;
  height: 12px;
  background: linear-gradient(to right, #0000ff, #00ffff, #00ff00, #ffff00, #ff0000);
  margin-top: 5px;
`;

//SCALE LABELS
export const ScaleLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
  font-size: 10px;
`;
