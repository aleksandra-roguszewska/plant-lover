import { Caption, CaptionBold } from "../UI/text/Caption.style";
import { StyledPlant } from "./Plant.styled";

type PlantProps = {
  imageUrl: string;
  name: string;
  location: string;
  className?: string;
};

const Plant: React.FC<PlantProps> = ({
  className,
  imageUrl,
  name,
  location,
}) => {
  return (
    <StyledPlant className={className}>
      <img src={imageUrl}></img>

      <div>
        <CaptionBold>{name}</CaptionBold>
        <Caption>{location}</Caption>
      </div>
    </StyledPlant>
  );
};

export default Plant;
