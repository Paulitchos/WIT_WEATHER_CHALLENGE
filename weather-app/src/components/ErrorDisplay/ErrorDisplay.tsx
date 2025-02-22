import React from "react";

//STYLES
import { ErrorContainer, ParentContainer } from "./ErrorDisplay.styles";

//TYPES
interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <ParentContainer>
      <ErrorContainer>{message}</ErrorContainer>
    </ParentContainer>
  );
};

export default ErrorDisplay;
