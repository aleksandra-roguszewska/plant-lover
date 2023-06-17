import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../firebaseConfig/firebase";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
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
        <button>Hi, username</button>
        <button
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
