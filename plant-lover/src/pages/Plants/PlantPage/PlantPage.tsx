import { useParams } from "react-router";
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

const PlantPage = () => {
  const { currentUserData } = useAuth();
  const { plantId } = useParams();

  const plantInfo: PlantData | undefined = currentUserData?.plants.find(
    (item) => item.id === plantId
  );

  return (
    <StyledPlantPage>
      <Wrapper>
        <img src={plantInfo?.imgUrl} />
        <TextContainer>
          <Flex flexdirection="column">
            <div>
              <H3 as="h1">{plantInfo?.plantName}</H3>
              <H5 as="h2">{plantInfo?.location}</H5>
            </div>
            <Flex>
              <PlantActionButton backgroundColor="pink">
                Water
              </PlantActionButton>
              <PlantActionButton backgroundColor="green">
                Fertilize
              </PlantActionButton>
              <PlantActionButton backgroundColor="grey">
                Report Death
              </PlantActionButton>
            </Flex>
            <Flex flexdirection="column">
              <Alert>Needs water! Watering 3 days late.</Alert>
              <Alert>Needs fertilizer! Fertilization 3 days late.</Alert>
            </Flex>
            <Flex flexdirection="column">
              <p>
                Watering frequency: {plantInfo?.wateringFrequency} days (last
                watered: {plantInfo?.lastWatering.toString()})
              </p>
              <p>
                Fertilization frequency: {plantInfo?.fertilizationFrequency}
                days (last fertilized: {plantInfo?.lastFertilization.toString()}
                )
              </p>
            </Flex>
            <p>
              <strong>Description:</strong> {plantInfo?.description}
            </p>
          </Flex>

          <Flex>
            <RectangularButtonPrimary>Close</RectangularButtonPrimary>
            <RectangularButtonSecondary>Edit</RectangularButtonSecondary>
          </Flex>
        </TextContainer>
      </Wrapper>
    </StyledPlantPage>
  );
};

export default PlantPage;
