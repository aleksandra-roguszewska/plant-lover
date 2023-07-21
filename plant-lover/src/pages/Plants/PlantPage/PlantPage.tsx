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
import { Timestamp, doc, updateDoc } from "firebase/firestore";
import { getStringFromTimestamp } from "../../../utils/getStringFromTimestamp";
import { currentDate } from "../../../utils/currentDate";
import { db } from "../../../config/firebase";
import { toast } from "react-hot-toast";

const PlantPage = () => {
  const { currentUserData, currentUser } = useAuth();
  const { plantId } = useParams();
  const navigate = useNavigate();

  const plantInfo: PlantData | undefined = currentUserData?.plants.find(
    (item) => item.id === plantId
  );

  const isActionLate = (
    lastAction: Timestamp,
    actionFrequency: number,
    currentDate: Date
  ) => {
    const timeSinceLastAction = Math.floor(
      (currentDate.getTime() - lastAction.toDate().getTime()) /
        (1000 * 60 * 60 * 24)
    );

    let isActionLate = false;

    if (timeSinceLastAction >= actionFrequency) {
      isActionLate = true;
    }
    return isActionLate;
  };

  const countTimeToNextAction = (
    lastAction: Timestamp,
    actionFrequency: number,
    currentDate: Date
  ) => {
    const timeSinceLastAction = Math.floor(
      (currentDate.getTime() - lastAction.toDate().getTime()) /
        (1000 * 60 * 60 * 24)
    );

    const timeToNextAction = actionFrequency - timeSinceLastAction;

    return timeToNextAction;
  };

  const water = async (
    plantId: any,
    currentUser: any,
    currentUserData: any
  ) => {
    const docRef = doc(db, "users", currentUser.uid);
    const updatedPlantInfo = { ...plantInfo, lastWatering: currentDate };
    const updatedUser = { ...currentUserData };

    const plantIndex = currentUserData.plants.findIndex(
      (item: any) => item.id === plantId
    );

    updatedUser.plants[plantIndex] = updatedPlantInfo;
    try {
      await updateDoc(docRef, updatedUser);
      toast.success("Your plant has been watered:)");
    } catch (err) {
      toast.error("An error occured. Try again later.");
      console.log(err);
    }
  };

  const fertilize = async (
    plantId: any,
    currentUser: any,
    currentUserData: any
  ) => {
    const docRef = doc(db, "users", currentUser.uid);
    const updatedPlantInfo = { ...plantInfo, lastFertilization: currentDate };
    const updatedUser = { ...currentUserData };

    const plantIndex = currentUserData.plants.findIndex(
      (item: any) => item.id === plantId
    );

    updatedUser.plants[plantIndex] = updatedPlantInfo;
    try {
      await updateDoc(docRef, updatedUser);
      toast.success("Your plant has been fertilized:)");
    } catch (err) {
      toast.error("An error occured. Try again later.");
      console.log(err);
    }
  };

  const killPlant = async (
    plantId: any,
    currentUser: any,
    currentUserData: any
  ) => {
    const docRef = doc(db, "users", currentUser.uid);
    const updatedPlantInfo = { ...plantInfo, isDead: true };
    const updatedUser = { ...currentUserData };

    const plantIndex = currentUserData.plants.findIndex(
      (item: any) => item.id === plantId
    );

    updatedUser.plants[plantIndex] = updatedPlantInfo;
    try {
      await updateDoc(docRef, updatedUser);
      toast("Your plant has been moved to cemetry:(", {
        icon: "💀",
      });
    } catch (err) {
      toast.error("An error occured. Try again later.");
      console.log(err);
    }
  };

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
                      water(plantInfo.id, currentUser, currentUserData)
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
                      fertilize(plantInfo.id, currentUser, currentUserData)
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
                      killPlant(plantInfo.id, currentUser, currentUserData)
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
