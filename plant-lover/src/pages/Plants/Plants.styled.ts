import styled from "styled-components";

export const StyledPlants = styled.div`
  height: 100%;

  h1 {
    text-transform: uppercase;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 50px;
  grid-template-areas: "button plants";
`;

export const PlantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 220px);
  gap: 50px;
  grid-template-rows: 283px;
  grid-area: plants;
`;

export const AddPlantButton = styled.div`
  height: 220px;
  width: 220px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.primaryGreen};
  border: 2px solid ${({ theme }) => theme.colors.primaryGreen};
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.1875rem;
  font-family: 2px solid ${({ theme }) => theme.fonts.primary};
  grid-area: button;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-area: button;
  transition: ease-in-out 0.2s all;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    box-shadow: inset -0 0 3px 3px rgba(33, 66, 41, 0.1);
    background-color: ${({ theme }) => theme.colors.secondaryGreen};
    border-width: 2.5px;
  }
`;
