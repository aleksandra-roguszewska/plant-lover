import { StyledPlant } from "./Plant.styled";

type PlantProps = {
  imageUrl: string;
  name: string;
  location: string;
};

const Plant: React.FC<PlantProps> = ({ imageUrl, name, location }) => {
  return (
    <StyledPlant className="container">
      <img src={imageUrl}></img>

      <div>
        <p>{name}</p>
        <p>{location}</p>
      </div>
    </StyledPlant>
  );
};

export default Plant;
