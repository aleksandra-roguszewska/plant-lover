import { useNavigate } from "react-router-dom";
import styles from "./Plants.module.css";
import Plant from "../../components/Plants/Plant";
import { H1 } from "../../components/UI/text/H1.style";
import { AddPlantButton, Grid, PlantGrid, StyledPlants } from "./Plants.styled";

const Plants = () => {
  const navigate = useNavigate();

  return (
    <StyledPlants>
      <H1>Your plants:</H1>
      <Grid>
        <AddPlantButton
          className={styles.add_plant_button}
          onClick={() => navigate("/plants/addplant")}
        >
          Add a new <br />
          plant
        </AddPlantButton>

        <PlantGrid>
          <Plant
            className="plant"
            imageUrl="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <Plant
            className="plant"
            imageUrl="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <Plant
            className="plant"
            imageUrl="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <Plant
            className="plant"
            imageUrl="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <Plant
            className="plant"
            imageUrl="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <Plant
            className="plant"
            imageUrl="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <Plant
            className="plant"
            imageUrl="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
        </PlantGrid>
      </Grid>
    </StyledPlants>
  );
};

export default Plants;
