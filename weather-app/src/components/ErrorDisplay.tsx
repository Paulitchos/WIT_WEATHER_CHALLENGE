import React from 'react';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay = ({ message }: ErrorDisplayProps) => {
  return <div style={{ color: 'red' }}>{message}</div>;
};

export default ErrorDisplay;