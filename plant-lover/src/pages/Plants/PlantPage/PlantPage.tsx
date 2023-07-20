import { useParams } from "react-router";
import useAuth, { PlantData } from "../../../context/AuthContext";
import { Flex } from "../../../components/UI/forms/Flex.styled";
import { PlantActionButton, StyledPlantPage } from "./PlantPage.styled";
import { H3 } from "../../../components";
import { H5 } from "../../../components/UI/text/H5.style";

const PlantPage = () => {
  const { currentUserData } = useAuth();
  const { plantId } = useParams();

  const plantInfo: PlantData | undefined = currentUserData?.plants.find(
    (item) => item.id === plantId
  );

  return (
    <StyledPlantPage>
      <H3 as="h1">YOUR PLANT</H3>
      <Flex>
        <img src={plantInfo?.imgUrl} />
        <div>
          <H3 as="h2">{plantInfo?.plantName}</H3>
          <H5 as="h3">{plantInfo?.location}</H5>
          <Flex>
            <PlantActionButton>Water</PlantActionButton>
            <PlantActionButton>Fertilize</PlantActionButton>
            <PlantActionButton>Report Death</PlantActionButton>
          </Flex>
          <p>Needs water! Watering 3 days late.</p>
          <p>Needs fertilizer! Fertilization 3 days late.</p>
          <p>
            Watering frequency: {plantInfo?.wateringFrequency} days (last
            watered: {plantInfo?.lastWatering.toString()})
          </p>
          <p>
            Fertilization frequency: {plantInfo?.fertilizationFrequency} days
            (last fertilized: {plantInfo?.lastFertilization.toString()})
          </p>
          <p>Description</p>
          <p>{plantInfo?.description}</p>
          <button>Close</button>
          <button>Edit</button>
        </div>
      </Flex>
    </StyledPlantPage>
  );
};

export default PlantPage;
