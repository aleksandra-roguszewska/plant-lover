import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../context/AuthContext";
import NavbarLink from "./NavbarLink/NavbarLink";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const currentUserId = currentUser?.uid;

  return (
    <nav>
      <div>
        <div>
          <NavLink to="/">{"PLANTLOVER <3"}</NavLink>
          {!currentUser ? null : (
            <>
              <NavbarLink linkUrl="/plants">Plants</NavbarLink>
              <NavbarLink linkUrl="/tasks">Tasks</NavbarLink>
              <NavbarLink linkUrl="/calendar">Calendar</NavbarLink>
              <NavbarLink linkUrl="/cemetry">Cemetry</NavbarLink>
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
    </nav>
  );
};

export default Navbar;
