import React from "react";

//STYLES
import { ErrorContainer } from "./ErrorDisplay.styles";

//TYPES
interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return <ErrorContainer>{message}</ErrorContainer>;
};

export default ErrorDisplay;
