import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { StyledForm } from "../../../components/UI/forms/Form.styled";
import { H1Forms } from "../../../components/UI/text/H1.style";
import { Flex } from "../../../components/UI/Flex.styled";
import { StyledInput } from "../../../components/UI/forms/Input.styled";
import { AuthButtonPrimary } from "../../../components/UI/buttons/AuthButtonPrimary.styled";
import { AuthButtonSecondary } from "../../../components/UI/buttons/AuthButtonSecondary.styled";
import { StyledTextarea } from "../../../components/UI/forms/Textarea.styled";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../../config/firebase";
import { StyledFileInput } from "../../../components/UI/forms/FileIinput.styled";
import useAuth, { PlantData } from "../../../context/AuthContext";
import { Timestamp, doc, updateDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";

const AddPlant = () => {
  const navigate = useNavigate();
  const { currentUser, currentUserData } = useAuth();
  const currentUserId = currentUser?.uid;

  const uploadFile = async (
    event: React.FormEvent<HTMLFormElement>,
    plantId: string
  ) => {
    const form = event.target as HTMLFormElement;
    const file = form.img.files[0];
    if (file) {
      const fileRef = ref(storage, `users/${currentUserId}/${plantId}`);
      await uploadBytesResumable(fileRef, file);
      const imageURL = await getDownloadURL(fileRef);
      return imageURL;
    } else {
      return null;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const plantId = uuid();
    const form = event.target as HTMLFormElement;

    const imgUrl = await uploadFile(event, plantId);

    const newPlant: PlantData = {
      id: plantId,
      plantName: form.plantName.value as string,
      location: form.location.value as string,
      imgUrl: imgUrl ? imgUrl : "",
      wateringFrequency: Number(form.wateringFrequency.value) as number,
      lastWatering: Timestamp.fromDate(
        new Date(form.lastWatering.value)
      ) as Timestamp,
      fertilizationFrequency: Number(form.wateringFrequency.value),
      lastFertilization: Timestamp.fromDate(
        new Date(form.lastFertilization.value)
      ) as Timestamp,
      description: form.description.value as string,
      isDead: false,
    };

    let updatedPlants;
    if (currentUserData?.plants && currentUserData?.plants.length > 0) {
      updatedPlants = { plants: [...currentUserData.plants, newPlant] };
    } else {
      updatedPlants = { plants: [newPlant] };
    }

    const docRef = doc(db, "users", currentUserId as string);
    try {
      await updateDoc(docRef, updatedPlants);
      toast.success("Dodano nową roślinkę");
      navigate("/plants");
    } catch (error: any) {
      {
        toast.error("Wystąpił błąd. Spróbuj później");
        console.log(error);
      }
    }
  };

  return (
    <Flex alignitems="center" justifycontent="center" height="100%">
      <StyledForm onSubmit={handleSubmit}>
        <H1Forms>Add plant</H1Forms>
        <Flex
          $flexdirection="column"
          alignitems="center"
          justifycontent="center"
        >
          <StyledInput
            type="text"
            name="plantName"
            id="plantName"
            placeholder="Plant name e.g. Epipremnum"
          />

          <StyledInput
            type="text"
            name="location"
            id="location"
            placeholder="Plant location e.g. Living room"
          />
          <label htmlFor="img">Add plant picture</label>
          <StyledFileInput type="file" id="img" name="img"></StyledFileInput>
          <StyledInput
            type="number"
            min="0"
            step="1"
            name="wateringFrequency"
            id="wateringFrequency"
            placeholder="Watering frequency in days e.g. 7"
          />
          <Flex>
            <label htmlFor="lastWatering">Last watering</label>
            <StyledInput type="date" name="lastWatering" id="lastWatering" />
          </Flex>
          <StyledInput
            type="number"
            min="0"
            step="1"
            name="fertilizationFrequency"
            id="fertilizationFrequency"
            placeholder="Fertilization frequency in days e.g. 14"
          />
          <Flex>
            <label htmlFor="lastFertilization">Last fertilization</label>
            <StyledInput
              type="date"
              name="lastFertilization"
              id="lastFertilization"
            />
          </Flex>
          <StyledTextarea id="description" placeholder="Description" />
        </Flex>

        <Flex justifycontent="center">
          <AuthButtonPrimary type="submit">Submit</AuthButtonPrimary>

          <AuthButtonSecondary
            type="button"
            onClick={() => {
              navigate("/plants");
            }}
          >
            Cancel
          </AuthButtonSecondary>
        </Flex>
      </StyledForm>
    </Flex>
  );
};

export default AddPlant;
