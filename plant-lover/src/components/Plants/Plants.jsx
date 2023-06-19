import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig/firebase";
import { collection, getDocs } from "firebase/firestore";

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
    <div>
      <h3>Your plants</h3>
      <button onClick={() => navigate("/plants/addplant")}>
        Add a new plant
      </button>
      <p>Some plant info</p>
      {plants?.map((item) => {
        return <p key={item.id}>{item.plantName}</p>;
      })}
    </div>
  );
};

export default Plants;
