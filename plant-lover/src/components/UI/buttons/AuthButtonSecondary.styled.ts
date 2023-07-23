import styled from "styled-components";

export const AuthButtonSecondary = styled.button`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryGreen};
  border: 2px solid ${({ theme }) => theme.colors.primaryGreen};
  width: 150px;
  height: 40px;
  border-radius: 20px;
  transition: all ease-in-out 200ms;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryGreen};
    border: 2px solid ${({ theme }) => theme.colors.secondaryGreen};
  }
`;
