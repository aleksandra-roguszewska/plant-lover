import { useNavigate, useParams } from "react-router";
import useAuth, { PlantData } from "../../../context/AuthContext";
import { Flex } from "../../../components/UI/forms/Flex.styled";
import {
  Alert,
  PlantActionButton,
  StyledPlantPage,
  TextContainer,
  Wrapper,
} from "./PlantPage.styled";
import { H3 } from "../../../components";
import { H5 } from "../../../components/UI/text/H5.style";
import { RectangularButtonPrimary } from "../../../components/UI/buttons/RectangularButtonPrimary.styled";
import { RectangularButtonSecondary } from "../../../components/UI/buttons/RectangularButtonSecondary.styled";
import { getStringFromTimestamp } from "../../../utils/getStringFromTimestamp";
import { currentDate } from "../../../utils/currentDate";
import {
  countTimeToNextAction,
  fertilize,
  isActionLate,
  killPlant,
  water,
} from "../../../utils/plantActions";

const PlantPage = () => {
  const { currentUserData, currentUser } = useAuth();
  const { plantId } = useParams();
  const navigate = useNavigate();

  const plantInfo: PlantData | undefined = currentUserData?.plants.find(
    (item) => item.id === plantId
  );

  if (plantInfo) {
    const isWateringLate = isActionLate(
      plantInfo?.lastWatering,
      plantInfo?.wateringFrequency,
      currentDate
    );

    const timeToNextWatering = countTimeToNextAction(
      plantInfo?.lastWatering,
      plantInfo?.wateringFrequency,
      currentDate
    );

    const isFertilizationLate = isActionLate(
      plantInfo?.lastFertilization,
      plantInfo?.fertilizationFrequency,
      currentDate
    );

    const timeToNextFertilization = countTimeToNextAction(
      plantInfo?.lastFertilization,
      plantInfo?.fertilizationFrequency,
      currentDate
    );

    return (
      <>
        <StyledPlantPage>
          <Wrapper>
            <img src={plantInfo.imgUrl} />
            <TextContainer>
              <Flex $flexdirection="column">
                <div>
                  <H3 as="h1">{plantInfo.plantName}</H3>
                  <H5 as="h2">{plantInfo.location}</H5>
                </div>
                <Flex>
                  <PlantActionButton
                    onClick={() =>
                      water(
                        currentUser,
                        currentUserData,
                        plantInfo,
                        currentDate
                      )
                    }
                    $backgroundcolor={
                      isWateringLate
                        ? "var(--accentPink)"
                        : "var(--primaryGreen)"
                    }
                  >
                    Water
                  </PlantActionButton>
                  <PlantActionButton
                    onClick={() =>
                      fertilize(
                        currentUser,
                        currentUserData,
                        plantInfo,
                        currentDate
                      )
                    }
                    $backgroundcolor={
                      isFertilizationLate
                        ? "var(--accentPink)"
                        : "var(--primaryGreen)"
                    }
                  >
                    Fertilize
                  </PlantActionButton>
                  <PlantActionButton
                    $backgroundcolor="var(--grey)"
                    onClick={() =>
                      killPlant(currentUser, currentUserData, plantInfo)
                    }
                  >
                    Report Death
                  </PlantActionButton>
                </Flex>
                <Flex $flexdirection="column">
                  {isWateringLate ? (
                    <Alert $isLate={isWateringLate}>
                      Needs water! Watering {Math.abs(timeToNextWatering)} days
                      late.
                    </Alert>
                  ) : (
                    <Alert $isLate={isWateringLate}>
                      Has enough water:) Next watering in{" "}
                      {Math.abs(timeToNextWatering)} days.
                    </Alert>
                  )}
                  {isFertilizationLate ? (
                    <Alert $isLate={isFertilizationLate}>
                      Needs fertilizer! Fertilization{" "}
                      {Math.abs(timeToNextFertilization)} days late.
                    </Alert>
                  ) : (
                    <Alert $isLate={isFertilizationLate}>
                      Has enough fertilizer:) Next fertilization in{" "}
                      {Math.abs(timeToNextFertilization)} days.
                    </Alert>
                  )}
                </Flex>
                <Flex $flexdirection="column">
                  <p>
                    Watering frequency: {plantInfo.wateringFrequency} days (last
                    watered: {getStringFromTimestamp(plantInfo.lastWatering)})
                  </p>
                  <p>
                    Fertilization frequency: {plantInfo.fertilizationFrequency}{" "}
                    days (last fertilized:{" "}
                    {getStringFromTimestamp(plantInfo.lastFertilization)})
                  </p>
                </Flex>
                <p>
                  <strong>Description:</strong> {plantInfo.description}
                </p>
              </Flex>

              <Flex>
                <RectangularButtonPrimary onClick={() => navigate("/plants")}>
                  Close
                </RectangularButtonPrimary>
                <RectangularButtonSecondary>Edit</RectangularButtonSecondary>
              </Flex>
            </TextContainer>
          </Wrapper>
        </StyledPlantPage>
      </>
    );
  }

  return null;
};

export default PlantPage;
