import styled from "styled-components";

export const RectangularButtonSecondary = styled.button`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryGreen};
  border: 2px solid ${({ theme }) => theme.colors.primaryGreen};
  width: 150px;
  height: 40px;
  transition: all ease-in-out 200ms;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accentPink};
    border: 2px solid ${({ theme }) => theme.colors.accentPink};
  }
`;
