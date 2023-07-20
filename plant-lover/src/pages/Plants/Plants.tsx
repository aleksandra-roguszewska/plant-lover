import { useNavigate } from "react-router-dom";
import Plant from "../../components/Plants/Plant";
import { H1 } from "../../components/UI/text/H1.style";
import { AddPlantButton, Grid, PlantGrid, StyledPlants } from "./Plants.styled";
import useAuth from "../../context/AuthContext";

const Plants = () => {
  const navigate = useNavigate();
  const { currentUserData } = useAuth();

  return (
    <StyledPlants>
      <H1>Your plants:</H1>
      <Grid>
        <AddPlantButton onClick={() => navigate("/plants/addplant")}>
          Add a new <br />
          plant
        </AddPlantButton>

        <PlantGrid>
          {currentUserData?.plants?.map((plant) => (
            <Plant
              key={plant.id}
              imageUrl={plant.imgUrl}
              name={plant.plantName}
              location={plant.location}
            />
          ))}
        </PlantGrid>
      </Grid>
    </StyledPlants>
  );
};

export default Plants;
