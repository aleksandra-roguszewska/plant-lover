import { H1, PlantGrid, Flex, Plant } from "../../components";
import useAuth from "../../context/AuthContext";
import { Overlay } from "./Cemetry.styled";

const Cemetery = () => {
  const { currentUserData } = useAuth();
  return (
    <Overlay>
      <Flex justifycontent="center">
        <div>
          <H1>PLANT CEMETERY</H1>
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
    </Overlay>
  );
};

export default Cemetery;
