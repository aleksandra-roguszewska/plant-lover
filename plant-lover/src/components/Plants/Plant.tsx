import { useNavigate } from "react-router";
import { Caption, CaptionBold } from "../UI/text/Caption.style";
import { StyledPlant } from "./Plant.styled";

type PlantProps = {
  imageUrl: string;
  name: string;
  location: string;
  className?: string;
  plantId: string;
};

const Plant: React.FC<PlantProps> = ({
  className,
  imageUrl,
  name,
  location,
  plantId,
}) => {
  const navigate = useNavigate();

  return (
    <StyledPlant
      onClick={() => {
        navigate(`/plants/${plantId}`);
      }}
      className={className}
    >
      <img src={imageUrl}></img>

      <div>
        <CaptionBold>{name}</CaptionBold>
        <Caption>{location}</Caption>
      </div>
    </StyledPlant>
  );
};

export default Plant;
