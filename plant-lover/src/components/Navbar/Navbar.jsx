import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../firebaseConfig/firebase";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavLink to="/">LandingPage</NavLink>
      <NavLink to="/plants">Plants</NavLink>
      <NavLink to="/tasks">Tasks</NavLink>
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
  );
};

export default Navbar;
