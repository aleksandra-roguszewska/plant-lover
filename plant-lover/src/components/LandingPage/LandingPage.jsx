import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";
import FormButtonMain from "../UI/FormButton/FormButtonMain";

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
      <div className={styles.buttons}>
        <FormButtonMain onClick={() => navigate("/register")}>
          Register
        </FormButtonMain>
        <p>Already have an account?</p>
        <FormButtonMain onClick={() => navigate("/login")}>
          Login
        </FormButtonMain>
      </div>
    </div>
  );
};

export default LandingPage;
