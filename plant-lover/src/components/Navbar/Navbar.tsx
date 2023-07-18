import { NavLink, useNavigate } from "react-router-dom";
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
              <button
                onClick={() => {
                  navigate(`/profil/${currentUserId}`);
                }}
              >
                <img src="../../../Navbar/icon_profil.png" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                Zaloguj się
              </button>
              <button
                onClick={() => {
                  navigate("/register");
                }}
              >
                Zarejestruj się
              </button>
            </>
          )}
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
