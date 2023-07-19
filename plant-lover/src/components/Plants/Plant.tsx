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
        <p>{name}</p>
        <p>{location}</p>
      </div>
    </StyledPlant>
  );
};

export default Plant;
