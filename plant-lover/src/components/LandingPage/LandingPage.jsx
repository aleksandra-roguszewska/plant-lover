import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.landing_page}>
      <h1 className={styles.header}>
        Join us! We’ll help
        <br />
        You take care of
        <br />
        your plants:)
      </h1>
      <button onClick={() => navigate("/register")}>Register</button>
      <p>Already have an account?</p>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default LandingPage;
