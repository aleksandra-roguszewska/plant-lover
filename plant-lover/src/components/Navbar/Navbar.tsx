import { useNavigate } from "react-router-dom";
import useAuth from "../../context/AuthContext";
import { NavbarLink } from "./NavbarLink/NavbarLink.styled";
import { StyledNavbar } from "./Navbar.styled";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
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
            <NavbarLink to="/cemetry">Cemetry</NavbarLink>
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
              Wyloguj się
            </button>
            <NavbarLink to={`/profil/${currentUserId}`}>Cześć, Ola</NavbarLink>
          </>
        ) : (
          <NavbarLink to="/login">Hej! Zaloguj się</NavbarLink>
        )}
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
