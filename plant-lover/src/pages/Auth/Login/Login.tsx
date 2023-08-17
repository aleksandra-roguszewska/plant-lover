import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import useAuth from "../../../context/AuthContext";
import { toast } from "react-hot-toast";
import { firebaseErrors } from "../../../utils/firebaseErrors";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthButtonPrimary } from "../../../components/UI/buttons/AuthButtonPrimary.styled";
import { AuthButtonSecondary } from "../../../components/UI/buttons/AuthButtonSecondary.styled";
import { H1Forms } from "../../../components/UI/text/H1.style";
import { StyledForm } from "../../../components/UI/forms/Form.styled";
import { StyledInput } from "../../../components/UI/forms/Input.styled";
import { Flex } from "../../../components/UI/Flex.styled";
import { StyledPasswordInputCotainer } from "../../../components/UI/forms/PasswordInput.styled";
import { useForm } from "react-hook-form";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, currentUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { email: "", password: "" } }); //register - api that allows us to register individual inputs into the hook

  const location = useLocation();
  const navigate = useNavigate();

  type FormData = {
    email: string;
    password: string;
  };

  const onSubmit = async (data: FormData) => {
    try {
      await login(data.email, data.password);
      toast.success("Successful login");
      navigate("/plants");
    } catch (error: any) {
      {
        firebaseErrors[error.code]
          ? toast.error(firebaseErrors[error.code])
          : toast.error("An error occurred. Please try again later. " + error);
      }
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Flex $alignitems="center" $justifycontent="center" $height="100%">
      {!currentUser ? (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <H1Forms>Login</H1Forms>
          <Flex $flexdirection="column">
            <StyledInput
              type="email"
              {...register("email", { required: "This field is required" })}
              id="email"
              placeholder="Email"
            />
            <p>{errors.email?.message}</p>
            <StyledPasswordInputCotainer>
              <StyledInput
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "This field is required",
                  minLength: { value: 6, message: "This is required" },
                })}
                name="password"
                id="password"
                placeholder="Password"
              />
              <p>{errors.password?.message}</p>
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
    </Flex>
  );
};

export default Login;
