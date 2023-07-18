import styled from "styled-components";

export const AuthButtonPrimary = styled.button`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.primaryGreen};
  color: ${({ theme }) => theme.colors.white};
  border: 1.5px solid ${({ theme }) => theme.colors.primaryGreen};
  width: 150px;
  height: 40px;
  border-radius: 20px;
  transition: all ease-in-out 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentPink};
    border-color: ${({ theme }) => theme.colors.accentPink};
  }
`;