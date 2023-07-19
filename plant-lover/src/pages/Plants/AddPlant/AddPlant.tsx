import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { StyledForm } from "../../../components/UI/forms/Form.styled";
import { H1 } from "../../../components/UI/text/H1.style";
import { Flex } from "../../../components/UI/forms/Flex.styled";
import { StyledInput } from "../../../components/UI/forms/Input.styled";
import { AuthButtonPrimary } from "../../../components/UI/buttons/AuthButtonPrimary.styled";
import { AuthButtonSecondary } from "../../../components/UI/buttons/AuthButtonSecondary.styled";
import { StyledTextarea } from "../../../components/UI/forms/Textarea.styled";

const AddPlant = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const plantName = form.plantName.value as string;

    try {
      // await login(email, password);
      toast.success("Logowanie zakończone sukcesem");
      navigate("/plants");
    } catch (error: any) {
      {
        console.log(error);
      }
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <H1>Add plant</H1>
        <Flex>
          <StyledInput
            type="text"
            name="plantName"
            id="plantName"
            placeholder="Plant name e.g. Epipremnum"
          />
          <StyledInput
            type="text"
            name="plantLocation"
            id="plantLocation"
            placeholder="Plant location e.g. Living room"
          />
          <StyledInput
            type="text"
            name="wateringFrequency"
            id="wateringFrequency"
            placeholder="Watering frequency e.g. 7"
          />
          <StyledInput
            type="text"
            name="fertilizationFrequency"
            id="fertilizationFrequency"
            placeholder="Fertilization frequency e.g. 14"
          />
          <StyledTextarea id="description" placeholder="Description" />
        </Flex>

        <div>
          <AuthButtonPrimary type="submit">Submit</AuthButtonPrimary>

          <AuthButtonSecondary
            type="button"
            onClick={() => {
              navigate("/plants");
            }}
          >
            Cancel
          </AuthButtonSecondary>
        </div>
      </StyledForm>
    </>
  );
};

export default AddPlant;
