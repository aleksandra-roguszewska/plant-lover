import { useNavigate } from "react-router-dom";
import Plant from "../../components/Plants/Plant";
import { H1 } from "../../components/UI/text/H1.style";
import { AddPlantButton, Grid, PlantGrid, StyledPlants } from "./Plants.styled";
import useAuth from "../../context/AuthContext";
import { Flex } from "../../components/UI/Flex.styled";

const Plants = () => {
  const navigate = useNavigate();
  const { currentUserData } = useAuth();

  return (
    <StyledPlants>
      <Flex justifycontent="center">
        <div>
          <H1>Plants</H1>
          <Grid>
            <AddPlantButton onClick={() => navigate("/plants/addplant")}>
              Add a new <br />
              plant
            </AddPlantButton>

            <PlantGrid>
              {currentUserData?.plants?.map(
                (plant) =>
                  !plant.isDead && (
                    <Plant
                      plantId={plant.id}
                      key={plant.id}
                      imageUrl={plant.imgUrl}
                      name={plant.plantName}
                      location={plant.location}
                    />
                  )
              )}
            </PlantGrid>
          </Grid>
        </div>
      </Flex>
    </StyledPlants>
  );
};

export default Plants;
