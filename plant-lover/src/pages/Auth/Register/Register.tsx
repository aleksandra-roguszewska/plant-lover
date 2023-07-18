import { useNavigate } from "react-router";
import { Flex } from "../../../components/UI/forms/Flex.styled";
import { StyledForm } from "../../../components/UI/forms/Form.styled";
import { StyledInput } from "../../../components/UI/forms/Input.styled";
import { AuthButtonPrimary } from "../../../components/UI/buttons/AuthButtonPrimary.styled";
import { AuthButtonSecondary } from "../../../components/UI/buttons/AuthButtonSecondary.styled";
import { H1 } from "../../../components/UI/text/H1.style";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { firebaseErrors } from "../../../utils/firebaseErrors";
import useAuth from "../../../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { StyledPasswordInputCotainer } from "../../../components/UI/forms/PasswordInput.styled";

const Register = () => {
  const { register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (formEvent) => {
    formEvent.preventDefault();

    const email = formEvent.target?.email.value.trim(" ");
    const password = formEvent.target?.password.value.trim(" ");
    const password_confirm = formEvent.target?.password_confirm.value.trim(" ");

    if (password !== password_confirm) {
      toast.error("Hasła nie są jednakowe");
    } else {
      try {
        await register(email, password);
        navigate("/");
        toast.success("Rejestracja zakończona sukcesem");
      } catch (error: any) {
        {
          firebaseErrors[error.code]
            ? toast.error(firebaseErrors[error.code])
            : toast.error("Wystąpił błąd. Spróbuj później");
        }
      }
      formEvent.target.reset();
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <H1>Register</H1>
      <Flex>
        <StyledInput
          type="userName"
          name="userName"
          id="userName"
          placeholder="User name"
        />
        <StyledInput type="email" name="email" id="email" placeholder="Email" />
        <StyledPasswordInputCotainer>
          <StyledInput
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
          />
          <button type="button" onClick={handleTogglePasswordVisibility}>
            {showPassword ? <FaEye size="1rem" /> : <FaEyeSlash size="1rem" />}
          </button>
        </StyledPasswordInputCotainer>
        <StyledPasswordInputCotainer>
          <StyledInput
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
          ></StyledInput>
          <button type="button" onClick={handleTogglePasswordVisibility}>
            {showPassword ? <FaEye size="1rem" /> : <FaEyeSlash size="1rem" />}
          </button>
        </StyledPasswordInputCotainer>
      </Flex>

      <AuthButtonPrimary type="submit">Register</AuthButtonPrimary>

      <p>Already have an account?</p>

      <AuthButtonSecondary
        type="button"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </AuthButtonSecondary>
    </StyledForm>
  );
};

export default Register;
