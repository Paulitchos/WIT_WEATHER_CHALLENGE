// src/components/SearchBar/SearchBar.styles.ts
import styled from "styled-components";

// WIT THEME COLORS
const theme = {
  primary: "#004080",
  secondary: "#007BFF",
  background: "#F0F4F8",
  text: "#333333",
  error: "#FF0000",
};

// FORM CONTAINER
export const Form = styled.form`
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background-color: ${theme.background};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: auto;
  margin: 0 auto;
`;

// INPUT, BUTTON, AND UNIT CONTAINER
export const InlineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

// INPUT AND BUTTON CONTAINER
export const InputContainer = styled.div`
  display: flex;
  width: 100%; /* Adjust width as needed */
  gap: 0.5rem;
`;

// INPUT FIELD
export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: ${theme.text};

  &:focus {
    outline: none;
    border-color: ${theme.primary};
    box-shadow: 0 0 0 3px rgba(0, 64, 128, 0.25);
  }
`;

// ERROR MESSAGE
export const ErrorMessage = styled.div`
  color: ${theme.error};
  background-color: rgba(255, 0, 0, 0.1); /* Light red background */
  padding: 0.5rem;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  border-left: 4px solid ${theme.error}; /* Adds a left border for emphasis */
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(255, 0, 0, 0.1);
  width: 88%; /* Span full width */
  text-align: left;
`;

// UNIT SELECTION CONTAINER
export const UnitContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// UNIT LABEL
export const UnitLabel = styled.span`
  font-size: 1rem;
  color: ${theme.text};
`;

// SUBMIT BUTTON
export const Button = styled.button`
  padding: 0.75rem 1rem;
  background-color: ${theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.secondary};
  }

  &:active {
    background-color: ${theme.primary};
  }
`;

// RESPONSIVE CONTAINER
export const ResponsiveContainer = styled.div`
  @media (max-width: 768px) {
    ${Form} {
      padding: 1rem;
    }

    ${Input} {
      font-size: 0.875rem;
    }

    ${Button} {
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    ${Form} {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5rem;
      background-color: ${theme.background};
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      max-width: 500px;
      gap: 0.75rem;
      margin: 0.5rem 0.5rem;
    }

    ${InlineContainer} {
      flex-direction: column; /* Stack input + button and unit controller vertically on mobile */
      gap: 0.5rem;
    }

    ${InputContainer} {
      width: 100%; /* Full width on mobile */
    }

    ${Button} {
      padding: 0.5rem;
    }
  }
`;