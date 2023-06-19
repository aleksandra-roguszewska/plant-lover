import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../firebaseConfig/firebase";
import styles from "./Navbar.module.css";
import useAuth from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { currentUser } = useAuth();

  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <span className={styles.link}>{"PLANTLOVER <3"}</span>
        <NavLink to="/" className={styles.link}>
          LandingPage
        </NavLink>
        <NavLink to="/plants" className={styles.link}>
          Plants
        </NavLink>
        <NavLink to="/tasks" className={styles.link}>
          Tasks
        </NavLink>
      </div>
      <div>
        {currentUser ? (
          <button className={styles.log_buttons}>
            Hi, {currentUser.email}
          </button>
        ) : null}
        <button
          className={styles.log_buttons}
          onClick={() => {
            navigate("/");
            logout();
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
