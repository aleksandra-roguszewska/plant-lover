import styled from "styled-components";

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primaryGreen};
  color: ${({ theme }) => theme.colors.primaryGreen};
  border-radius: 4px;
  padding: 0.625rem;
  margin-top: 0.2rem;
  font-family: "Lato", sans-serif;
  font-size: 0.875rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryGreen};
    opacity: 0.8;
  }
`;
