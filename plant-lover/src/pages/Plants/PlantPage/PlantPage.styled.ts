import styled from "styled-components";

export const StyledPlantPage = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};

  h1 {
    margin-bottom: 50px;
  }
  img {
    height: 600px;
    width: 600px;
  }
`;

export const PlantActionButton = styled.div`
  background-color: lightgreen;
  height: 50px;
  width: 150px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
