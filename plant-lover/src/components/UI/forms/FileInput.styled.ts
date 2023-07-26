import styled from "styled-components";

export const StyledFileInput = styled.input`
  margin-top: 0.3rem;
  font-family: ${({ theme }) => theme.fonts.primary};

  &::file-selector-button {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primaryGreen};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    font-family: "Nunito Sans", sans-serif;
    transition: all 0.2s ease;
    margin-right: 1rem;
  }

  &::file-selector-button:hover {
    background-color: ${({ theme }) => theme.colors.secondaryGreen};
    box-shadow: 0 0.2rem 0.4rem 0 #d9d9d9;
    cursor: pointer;
  }
`;
