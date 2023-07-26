import { useNavigate, useParams } from "react-router";
import useAuth, { PlantData } from "../../../context/AuthContext";
import {
  Alert,
  PlantActionButton,
  StyledPlantPage,
  TextContainer,
  Wrapper,
} from "./PlantPage.styled";
import {
  H3,
  H5,
  RectangularButtonPrimary,
  RectangularButtonSecondary,
  Flex,
  Loader,
} from "../../../components";
import { getStringFromTimestamp } from "../../../utils/getStringFromTimestamp";
import { currentDate } from "../../../utils/currentDate";
import {
  countTimeToNextAction,
  fertilize,
  isActionLate,
  killPlant,
  water,
} from "../../../utils/plantActions";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../../config/firebase";
import { toast } from "react-hot-toast";
import { deleteObject, ref } from "firebase/storage";
import { useState } from "react";

const PlantPage = () => {
  const { currentUserData, currentUser } = useAuth();
  const { plantId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const removePlantPicture = async (plantId: string, currentUserId: string) => {
    const fileRef = ref(storage, `users/${currentUserId}/${plantId}`);
    deleteObject(fileRef);
  };

  const deletePlant = async (
    currentUser: any,
    currentUserData: any,
    plantId: any
  ) => {
    setIsLoading(true);
    const docRef = doc(db, "users", currentUser.uid);

    const updatedUser = { ...currentUserData };

    const updatedPlants = currentUserData.plants.filter(
      (item: any) => item.id !== plantId
    );

    updatedUser.plants = updatedPlants;
    try {
      await updateDoc(docRef, updatedUser);
      await removePlantPicture(plantId, currentUser.uid);
      toast.success("Your plant has been deleted.");
      navigate(-1);
    } catch (err) {
      toast.error("An error occured. Try again later.");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (currentUserData && currentUserData !== null) {
    const plantInfo: PlantData | undefined = currentUserData?.plants.find(
      (item) => item.id === plantId
    );

    if (plantInfo && plantInfo !== undefined && plantInfo !== null) {
      const isWateringLate = isActionLate(
        plantInfo.lastWatering,
        plantInfo.wateringFrequency,
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

      if (isLoading) {
        return <Loader />;
      }

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
                      onClick={() => {
                        killPlant(currentUser, currentUserData, plantInfo);
                        navigate("/plants");
                      }}
                    >
                      Report Death
                    </PlantActionButton>
                  </Flex>
                  <Flex $flexdirection="column">
                    {isWateringLate ? (
                      <Alert $isLate={isWateringLate}>
                        Needs water! Watering {Math.abs(timeToNextWatering)}{" "}
                        days late.
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
                      Watering frequency: {plantInfo.wateringFrequency} days
                      (last watered:{" "}
                      {getStringFromTimestamp(plantInfo.lastWatering)})
                    </p>
                    <p>
                      Fertilization frequency:{" "}
                      {plantInfo.fertilizationFrequency} days (last fertilized:{" "}
                      {getStringFromTimestamp(plantInfo.lastFertilization)})
                    </p>
                  </Flex>
                  <p>
                    <strong>Description:</strong> {plantInfo.description}
                  </p>
                </Flex>

                <Flex>
                  <RectangularButtonPrimary onClick={() => navigate(-1)}>
                    Close
                  </RectangularButtonPrimary>
                  <RectangularButtonSecondary
                    onClick={() =>
                      deletePlant(currentUser, currentUserData, plantId)
                    }
                  >
                    Delete
                  </RectangularButtonSecondary>
                </Flex>
              </TextContainer>
            </Wrapper>
          </StyledPlantPage>
        </>
      );
    }
  }

  return null;
};

export default PlantPage;
