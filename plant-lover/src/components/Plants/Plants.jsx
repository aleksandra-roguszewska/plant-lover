import { useNavigate } from "react-router-dom";

const Plants = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Your plants</h3>
      <button onClick={() => navigate("/plants/addplant")}>
        Add a new plant
      </button>
      <p>Some plant info</p>
    </div>
  );
};

export default Plants;
