import styled from "styled-components";

export const RectangularButtonPrimary = styled.button`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.primaryGreen};
  color: ${({ theme }) => theme.colors.white};
  border: 1.5px solid ${({ theme }) => theme.colors.primaryGreen};
  width: 150px;
  height: 40px;
  transition: all ease-in-out 200ms;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentPink};
    border-color: ${({ theme }) => theme.colors.accentPink};
  }
`;
