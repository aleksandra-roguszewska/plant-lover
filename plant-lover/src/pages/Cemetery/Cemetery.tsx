import { H1 } from "../../components";
import Plant from "../../components/Plants/Plant";
import { Flex } from "../../components/UI/forms/Flex.styled";
import useAuth from "../../context/AuthContext";
import { Grid, PlantGrid, StyledPlants } from "../Plants/Plants.styled";
import { Overlay } from "./Cemetry.styled";

const Cemetery = () => {
  const { currentUserData } = useAuth();
  return (
    <Overlay>
      <StyledPlants>
        <Flex justifycontent="center">
          <div>
            <H1>PLANT GRAVEYARD</H1>
            <PlantGrid>
              {currentUserData?.plants?.map(
                (plant) =>
                  plant.isDead && (
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
          </div>
        </Flex>
      </StyledPlants>
    </Overlay>
  );
};

export default Cemetery;
