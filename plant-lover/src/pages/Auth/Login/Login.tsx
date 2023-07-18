import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import useAuth from "../../../context/AuthContext";
import { toast } from "react-hot-toast";
import { firebaseErrors } from "../../../utils/firebaseErrors";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthButtonPrimary } from "../../../components/UI/buttons/AuthButtonPrimary.styled";
import { AuthButtonSecondary } from "../../../components/UI/buttons/AuthButtonSecondary.styled";
import { H1 } from "../../../components/UI/text/H1.style";
import { StyledForm } from "../../../components/UI/forms/Form.styled";
import { StyledInput } from "../../../components/UI/forms/Input.styled";
import { Flex } from "../../../components/UI/forms/Flex.styled";
import { StyledPasswordInputCotainer } from "../../../components/UI/forms/PasswordInput.styled";

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
        <StyledForm onSubmit={handleSubmit}>
          <H1>Login</H1>
          <Flex>
            <StyledInput
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <StyledPasswordInputCotainer>
              <StyledInput
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
              />
              <button type="button" onClick={handleTogglePasswordVisibility}>
                {showPassword ? (
                  <FaEye size="1rem" />
                ) : (
                  <FaEyeSlash size="1rem" />
                )}
              </button>
            </StyledPasswordInputCotainer>
          </Flex>

          <AuthButtonPrimary type="submit">Login</AuthButtonPrimary>

          <p>Don't have an account yet?</p>

          <AuthButtonSecondary
            type="button"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </AuthButtonSecondary>
        </StyledForm>
      ) : location.state ? (
        <Navigate to={location.state.from.pathname} />
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default Login;
