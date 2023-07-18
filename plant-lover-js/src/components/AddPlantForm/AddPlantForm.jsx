import { useNavigate } from "react-router-dom";
import styles from "./AddPlantForm.module.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { toast } from "react-hot-toast";
import useAuth from "../context/AuthContext";

const AddPlantForm = () => {
  const navigate = useNavigate();

  const { currentUser } = useAuth();
  console.log(currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPlantData = Object.fromEntries(formData.entries());
    const newPlant = { ...newPlantData, plantOwnerId: currentUser.uid };
    console.log(newPlant);
    addDoc(collection(db, "plants"), newPlant)
      .then(() => {
        toast.success("Plant added successfully");
        e.target.reset();
        navigate("/plants");
      })
      .catch(() => {
        toast.error("Error appeared. Try again later");
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Add a new plant</h1>
      <input
        placeholder="Plant name"
        type="text"
        id="plantName"
        name="plantName"
        defaultValue="Monstera"
      ></input>
      {/* <input
        placeholder="Plant photo"
        type="file"
        id="plantPhoto"
      ></input> */}
      <input
        placeholder="Location"
        type="text"
        id="location"
        name="location"
        defaultValue="Kitchen"
      ></input>
      <input
        placeholder="Watering frequency"
        type="text"
        id="wateringFrequency"
        name="wateringFrequency"
        defaultValue="2"
      ></input>
      <input
        placeholder="Fertilization frequency"
        type="text"
        id="fertilizationFrequency"
        name="fertilizationFrequency"
        defaultValue="2"
      ></input>
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        defaultValue="Great plant! I love it."
      ></textarea>
      <button>Submit</button>
      <button
        onClick={() => {
          navigate("/plants");
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default AddPlantForm;
