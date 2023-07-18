import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig/firebase";
import { collection, getDocs } from "firebase/firestore";
import PlantField from "../UI/PlantField/PlantField";
import styles from "./Plants.module.css";

const Plants = () => {
  const navigate = useNavigate();
  const [plants, setPlants] = useState([]);

  const getPlants = () => {
    const collectionRef = collection(db, "plants");
    getDocs(collectionRef)
      .then((snapshot) => {
        return snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      })
      .then((plants) => {
        setPlants(plants);
      });
  };

  useEffect(() => {
    getPlants();
  }, []);

  console.log(plants);

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
        {/* <p>Some plant info</p>
      {plants?.map((item) => {
        return <p key={item.id}>{item.plantName}</p>;
      })} */}
        <div className={styles.plant_grid}>
          <PlantField
            imageURL="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <PlantField
            imageURL="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <PlantField
            imageURL="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <PlantField
            imageURL="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <PlantField
            imageURL="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <PlantField
            imageURL="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
          <PlantField
            imageURL="../../../public/img_sanseveria.jpg"
            name="Sanseveria Moonshine"
            location="Living room"
          />
        </div>
      </div>
    </div>
  );
};

export default Plants;
