import { Flex, H1, H4, Message, Plant, PlantGrid } from "../../components";
import useAuth, { PlantData } from "../../context/AuthContext";
import { currentDate } from "../../utils/currentDate";
import { isActionLate } from "../../utils/plantActions";

const doPlantsNeedWatering = (plants: PlantData[]) => {
  const alivePlants = plants.filter((plant) => !plant.isDead);
  return alivePlants.some((plant) =>
    isActionLate(plant.lastWatering, plant.wateringFrequency, currentDate)
  );
};

const doPlantsNeedFertilization = (plants: PlantData[]) => {
  const alivePlants = plants.filter((plant) => !plant.isDead);
  return alivePlants.some((plant) =>
    isActionLate(
      plant.lastFertilization,
      plant.fertilizationFrequency,
      currentDate
    )
  );
};

const Tasks = () => {
  const { currentUserData } = useAuth();

  if (currentUserData) {
    console.log(doPlantsNeedFertilization(currentUserData.plants));
    return (
      <Flex $justifycontent="center">
        <div>
          <H1 as="h1">Tasks for today</H1>
          <H4 as="h2">Need watering:</H4>
          {doPlantsNeedWatering(currentUserData.plants) ? (
            <PlantGrid>
              {currentUserData?.plants?.map((plant) => {
                const isWateringLate = isActionLate(
                  plant.lastWatering,
                  plant.wateringFrequency,
                  currentDate
                );

                return (
                  !plant.isDead &&
                  isWateringLate && (
                    <Plant
                      plantId={plant.id}
                      key={plant.id}
                      imageUrl={plant.imgUrl}
                      name={plant.plantName}
                      location={plant.location}
                    />
                  )
                );
              })}
            </PlantGrid>
          ) : (
            <Message>Good job! All your plants are watered.</Message>
          )}
          <H4 as="h2">Need fertilization:</H4>
          {doPlantsNeedFertilization(currentUserData.plants) ? (
            <PlantGrid>
              {currentUserData?.plants?.map((plant) => {
                const isFertilizationLate = isActionLate(
                  plant.lastFertilization,
                  plant.fertilizationFrequency,
                  currentDate
                );
                return (
                  !plant.isDead &&
                  isFertilizationLate && (
                    <Plant
                      plantId={plant.id}
                      key={plant.id}
                      imageUrl={plant.imgUrl}
                      name={plant.plantName}
                      location={plant.location}
                    />
                  )
                );
              })}
            </PlantGrid>
          ) : (
            <Message>Good job! All your plants are fertilized</Message>
          )}
        </div>
      </Flex>
    );
  } else {
    return null;
  }
};

export default Tasks;
