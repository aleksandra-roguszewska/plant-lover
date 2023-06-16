import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">LandingPage</NavLink>
      <NavLink to="/plants">Plants</NavLink>
      <NavLink to="/tasks">Tasks</NavLink>
    </div>
  );
};

export default Navbar;
