import { useNavigate } from "react-router-dom";
import styles from "./Plants.module.css";
import Plant from "../../components/Plants/Plant";

const Plants = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Your plants:</h3>
      <div className={styles.plant_container}>
        <button
          className={styles.add_plant_button}
          onClick={() => navigate("/plants/addplant")}
        >
          Add a new <br />
          plant
        </button>

        <div className={styles.plant_grid}>
          <Plant
            imageUrl="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <Plant
            imageUrl="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <Plant
            imageUrl="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <Plant
            imageUrl="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <Plant
            imageUrl="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <Plant
            imageUrl="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <Plant
            imageUrl="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
        </div>
      </div>
    </div>
  );
};

export default Plants;
