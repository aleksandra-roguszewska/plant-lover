import styled from "styled-components";

export const AuthButtonSecondary = styled.button`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primaryGreen};
  border: 2px solid ${({ theme }) => theme.colors.primaryGreen};
  width: 150px;
  height: 40px;
  border-radius: 20px;
  transition: all ease-in-out 200ms;

  &:hover {
    color: ${({ theme }) => theme.colors.accentPink};
    border: 2px solid ${({ theme }) => theme.colors.accentPink};
  }
`;
