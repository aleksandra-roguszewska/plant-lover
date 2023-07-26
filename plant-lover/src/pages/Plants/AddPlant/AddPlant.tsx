import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { db, storage } from "../../../config/firebase";
import { Timestamp, doc, updateDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import useAuth, { PlantData } from "../../../context/AuthContext";
import {
  H1Forms,
  Flex,
  StyledForm,
  StyledInput,
  StyledTextarea,
  StyledLabel,
  AuthButtonPrimary,
  AuthButtonSecondary,
  StyledFileInput,
} from "../../../components";

const AddPlant = () => {
  const navigate = useNavigate();
  const { currentUser, currentUserData } = useAuth();
  const currentUserId = currentUser?.uid;

  const MAX_FILE_SIZE = 1048576;

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/svg+xml"];
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!allowedTypes.includes(file.type)) {
      toast.error("Please select a valid image file (JPEG, PNG, SVG).");
      event.target.value = "";
    }

    if (file.size > MAX_FILE_SIZE) {
      toast.error("Please select a smaller file. Maximum file size is 1MB.");
      event.target.value = "";
    }
  };

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
      fertilizationFrequency: Number(form.fertilizationFrequency.value),
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
    <Flex $alignitems="center" $justifycontent="center" $height="100%">
      <StyledForm onSubmit={handleSubmit}>
        <H1Forms>Add plant</H1Forms>
        <Flex
          $flexdirection="column"
          $alignitems="center"
          $justifycontent="center"
        >
          <StyledInput
            type="text"
            name="plantName"
            id="plantName"
            placeholder="Plant name e.g. Epipremnum"
            required
          />

          <StyledInput
            type="text"
            name="location"
            id="location"
            placeholder="Plant location e.g. Living room"
            required
          />
          <Flex
            $flexdirection="column"
            $alignitems="center"
            $justifycontent="center"
            $gap="0.1rem"
          >
            <StyledLabel htmlFor="img">Add plant picture</StyledLabel>
            <StyledFileInput
              type="file"
              id="img"
              name="img"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => onFileChange(e)}
              required
            ></StyledFileInput>
          </Flex>
          <StyledInput
            type="number"
            min="0"
            step="1"
            name="wateringFrequency"
            id="wateringFrequency"
            placeholder="Watering frequency in days e.g. 7"
            required
          />
          <Flex $alignitems="center">
            <StyledLabel htmlFor="lastWatering">Last watering</StyledLabel>
            <StyledInput
              type="date"
              name="lastWatering"
              id="lastWatering"
              required
            />
          </Flex>
          <StyledInput
            type="number"
            min="0"
            step="1"
            name="fertilizationFrequency"
            id="fertilizationFrequency"
            placeholder="Fertilization frequency in days e.g. 14"
            required
          />
          <Flex $alignitems="center">
            <StyledLabel htmlFor="lastFertilization">
              Last fertilization
            </StyledLabel>
            <StyledInput
              type="date"
              name="lastFertilization"
              id="lastFertilization"
              required
            />
          </Flex>
          <StyledTextarea id="description" placeholder="Description" />
        </Flex>

        <Flex $justifycontent="center">
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
