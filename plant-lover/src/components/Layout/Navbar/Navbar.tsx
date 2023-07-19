import { useNavigate } from "react-router-dom";
import useAuth from "../../../context/AuthContext";
import { NavbarLink } from "./NavbarLink/NavbarLink.styled";
import { StyledNavbar } from "./Navbar.styled";

const Navbar = () => {
  const { currentUser, logout, currentUserData } = useAuth();
  const navigate = useNavigate();
  const currentUserId = currentUser?.uid;

  return (
    <StyledNavbar>
      <div>
        <NavbarLink to="/">{"PLANTLOVER <3"}</NavbarLink>
        {!currentUser ? null : (
          <>
            <NavbarLink to="/plants">Plants</NavbarLink>
            <NavbarLink to="/tasks">Tasks</NavbarLink>
            <NavbarLink to="/calendar">Calendar</NavbarLink>
            <NavbarLink to="/cemetery">Cemetery</NavbarLink>
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
