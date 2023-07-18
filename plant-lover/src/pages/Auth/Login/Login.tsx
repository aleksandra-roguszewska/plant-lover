import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import useAuth from "../../../context/AuthContext";
import { toast } from "react-hot-toast";
import { firebaseErrors } from "../../../utils/firebaseErrors";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, currentUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const email = form.email.value as string;
    const password = form.password.value as string;

    try {
      await login(email, password);
      toast.success("Logowanie zakończone sukcesem");
    } catch (error: any) {
      {
        firebaseErrors[error.code]
          ? toast.error(firebaseErrors[error.code])
          : toast.error("Wystąpił błąd. Spróbuj później" + error);
        console.log(error);
      }
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      {!currentUser ? (
        <div>
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <h2>Witaj ponownie!</h2>
                <label htmlFor="email">Adres e-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Wpisz adres e-mail..."
                />
                <label htmlFor="password">Hasło</label>
                <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Wpisz hasło..."
                  />
                  <button
                    type="button"
                    onClick={handleTogglePasswordVisibility}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
                <p>
                  <a href="/forgotpassword">Zapomniałeś hasła?</a>
                </p>
                <button type="submit">Zaloguj się</button>
                <div>
                  <p>Nie masz konta?</p>
                </div>
                <button
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Zarejestruj się
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : location.state ? (
        <Navigate to={location.state.from.pathname} />
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Login;
