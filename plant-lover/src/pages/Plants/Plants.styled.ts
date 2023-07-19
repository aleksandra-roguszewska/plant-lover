import styled from "styled-components";

export const StyledPlants = styled.div`
  margin-top: 90px;
  height: 100%;

  h1 {
    text-transform: uppercase;
    padding-bottom: 50px;
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
  background-color: hsl(135, 33%, 19%);
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1, 1875rem;
  grid-area: button;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-area: button;

  &:hover {
    opacity: 0.5;
  }
`;
