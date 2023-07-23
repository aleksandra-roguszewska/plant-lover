import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../context/AuthContext";
import { NavbarLink } from "./NavbarLink/NavbarLink.styled";
import { StyledNavbar } from "./Navbar.styled";
import { useState } from "react";

const Navbar = () => {
  const { currentUser, logout, currentUserData } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsLogoHovered(true);
  };

  const handleMouseLeave = () => {
    setIsLogoHovered(false);
  };

  let isLogoPink;

  if (!isLogoHovered && location.pathname !== "/") {
    isLogoPink = false;
  } else {
    isLogoPink = true;
  }

  return (
    <StyledNavbar>
      <div>
        <NavbarLink
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "red" : undefined,
          })}
        >
          <div>
            Plantlover
            <img
              src={
                isLogoPink
                  ? "../../../../heart_icon_pink.svg"
                  : "../../../../heart_icon.svg"
              }
            />
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
              Logout
            </button>
            <button>Hi, {currentUserData?.userName}</button>
          </>
        ) : (
          <NavbarLink to="/login">Hi! Log in</NavbarLink>
        )}
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
