import { useNavigate } from "react-router";
import { Flex } from "../../../components/UI/Flex.styled";
import { StyledForm } from "../../../components/UI/forms/Form.styled";
import { StyledInput } from "../../../components/UI/forms/Input.styled";
import { AuthButtonPrimary } from "../../../components/UI/buttons/AuthButtonPrimary.styled";
import { AuthButtonSecondary } from "../../../components/UI/buttons/AuthButtonSecondary.styled";
import { H1Forms } from "../../../components/UI/text/H1.style";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { firebaseErrors } from "../../../utils/firebaseErrors";
import useAuth from "../../../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { StyledPasswordInputCotainer } from "../../../components/UI/forms/PasswordInput.styled";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

const Register = () => {
  const { register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (formEvent: React.FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();

    const form = formEvent?.target as HTMLFormElement;
    const userName = form?.userName.value.trim(" ") as string;
    const email = form?.email.value.trim(" ") as string;
    const password = form?.password.value.trim(" ") as string;
    const password_confirm = form?.confirmPassword.value.trim(" ") as string;

    const newUser = {
      userName: userName,
      email: email,
    };

    if (password !== password_confirm) {
      toast.error("Hasła nie są jednakowe");
    } else {
      try {
        const userCredential = await register(email, password);
        const userId = userCredential.user.uid;
        const docRef = doc(db, "users", userId);
        await setDoc(docRef, newUser);
        navigate("/");
        toast.success("Rejestracja zakończona sukcesem");
      } catch (error: any) {
        {
          firebaseErrors[error.code]
            ? toast.error(firebaseErrors[error.code])
            : toast.error("Wystąpił błąd. Spróbuj później");
          console.log(error);
        }
      }
      form.reset();
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Flex alignitems="center" justifycontent="center" height="100%">
      <StyledForm onSubmit={handleSubmit}>
        <H1Forms>Register</H1Forms>
        <Flex $flexdirection="column">
          <StyledInput
            type="userName"
            name="userName"
            id="userName"
            placeholder="User name"
          />
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
          <StyledPasswordInputCotainer>
            <StyledInput
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
            ></StyledInput>
            <button type="button" onClick={handleTogglePasswordVisibility}>
              {showPassword ? (
                <FaEye size="1rem" />
              ) : (
                <FaEyeSlash size="1rem" />
              )}
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
    </Flex>
  );
};

export default Register;
