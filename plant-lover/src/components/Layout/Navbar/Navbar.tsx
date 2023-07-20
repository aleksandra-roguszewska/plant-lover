import { useNavigate } from "react-router-dom";
import useAuth from "../../../context/AuthContext";
import { NavbarLink } from "./NavbarLink/NavbarLink.styled";
import { StyledNavbar } from "./Navbar.styled";

const Navbar = () => {
  const { currentUser, logout, currentUserData } = useAuth();
  const navigate = useNavigate();

  return (
    <StyledNavbar>
      <div>
        <NavbarLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "red" : undefined,
          })}
        >
          <div>
            Plantlover
            <img src="../../../../heart_icon.svg" />
          </div>
        </NavbarLink>
        {!currentUser ? null : (
          <>
            <NavbarLink
              to="/plants"
              style={({ isActive }) => ({
                color: isActive ? "red" : undefined,
              })}
            >
              Plants
            </NavbarLink>
            <NavbarLink
              to="/tasks"
              style={({ isActive }) => ({
                color: isActive ? "red" : undefined,
              })}
            >
              Tasks
            </NavbarLink>
            <NavbarLink
              to="/calendar"
              style={({ isActive }) => ({
                color: isActive ? "red" : undefined,
              })}
            >
              Calendar
            </NavbarLink>
            <NavbarLink
              to="/cemetery"
              style={({ isActive }) => ({
                color: isActive ? "red" : undefined,
              })}
            >
              Cemetery
            </NavbarLink>
          </>
        )}
      </div>
      <div>
        {currentUser ? (
          <>
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              LOGOUT
            </button>
            <NavbarLink to={`/profile`}>
              Hi, {currentUserData?.userName}
            </NavbarLink>
          </>
        ) : (
          <NavbarLink to="/login">Hi! Log in</NavbarLink>
        )}
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
