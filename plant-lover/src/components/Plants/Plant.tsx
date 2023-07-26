import { useNavigate } from "react-router";
import { Caption, CaptionBold } from "../UI/text/Caption.style";
import { StyledPlant } from "./Plant.styled";
import { useState } from "react";
import { fertilize, water } from "../../utils/plantActions";
import { currentDate } from "../../utils/currentDate";
import useAuth, { PlantData } from "../../context/AuthContext";

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
  const [isHovered, setisHovered] = useState(false);
  const { currentUser, currentUserData } = useAuth();

  const plantInfo: PlantData | undefined = currentUserData?.plants.find(
    (item) => item.id === plantId
  );

  const handleMouseEnter = () => {
    setisHovered(true);
  };

  const handleMouseLeave = () => {
    setisHovered(false);
  };

  return (
    <StyledPlant
      $isHovered={isHovered}
      onClick={() => {
        navigate(`/plants/${plantId}`);
      }}
      className={className}
    >
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={imageUrl}></img>
        {isHovered && (
          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                water(currentUser, currentUserData, plantInfo, currentDate);
              }}
            >
              Water
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                fertilize(currentUser, currentUserData, plantInfo, currentDate);
              }}
            >
              Fertilize
            </button>
          </div>
        )}
      </div>

      <div>
        <CaptionBold>{name}</CaptionBold>
        <Caption>{location}</Caption>
      </div>
    </StyledPlant>
  );
};

export default Plant;
