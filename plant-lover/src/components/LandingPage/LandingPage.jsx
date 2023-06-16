import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Join us! We’ll help You take care of your plants:)</h1>
      <button onClick={() => navigate("/register")}>Register</button>
      <p>Already have an account?</p>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default LandingPage;
