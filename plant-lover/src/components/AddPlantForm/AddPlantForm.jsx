import { useNavigate } from "react-router-dom";
import styles from "./AddPlantForm.module.css";

const AddPlantForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Add a new plant</h1>
      <input
        placeholder="Plant name"
        type="text"
        id="plantName"
        name="plantName"
      ></input>
      {/* <input
        placeholder="Plant photo"
        type="file"
        id="plantPhoto"
      ></input> */}
      <input
        placeholder="Plant name"
        type="text"
        id="plantName"
        name="plantName"
      ></input>
      <input
        placeholder="Location"
        type="text"
        id="loaction"
        name="location"
      ></input>{" "}
      <input
        placeholder="Watering frequency"
        type="text"
        id="wateringFrequency"
        name="wateringFrequency"
      ></input>
      <textarea
        id="description"
        name="description"
        placeholder="Description"
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
