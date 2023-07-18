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
              <NavbarLink linkUrl="/mojeoferty">Moje oferty</NavbarLink>
              <NavbarLink linkUrl="/dodajoferte">Dodaj ofertę</NavbarLink>
              <NavbarLink linkUrl="/freelancerzy">
                Znajdź freelancera
              </NavbarLink>
              <NavbarLink linkUrl="/zlecenia">Znajdź zlecenie</NavbarLink>
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
