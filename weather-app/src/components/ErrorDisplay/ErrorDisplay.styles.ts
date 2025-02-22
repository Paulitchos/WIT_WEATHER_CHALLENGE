import styled from "styled-components";

//ERROR CONTAINER
export const ErrorContainer = styled.div`
  background-color: #ffe6e6;
  color: #d8000c;
  border: 1px solid #d8000c;
  padding: 1rem;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
  margin: 1rem 0;
  max-width: 100%;
`;

//PARENT CONTAINER (to center ErrorContainer)
export const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;