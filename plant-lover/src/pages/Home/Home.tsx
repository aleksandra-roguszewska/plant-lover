import { useNavigate } from "react-router";
import { AuthButtonPrimary } from "../../components/UI/buttons/AuthButtonPrimary.styled";
import { AuthButtonSecondary } from "../../components/UI/buttons/AuthButtonSecondary.styled";
import { H1 } from "../../components/UI/text/H1.style";
import { StyledHome } from "./Home.styled";
import useAuth from "../../context/AuthContext";
import { Flex } from "../../components/UI/forms/Flex.styled";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  return (
    <>
      {!currentUser ? (
        <StyledHome>
          <div>
            <H1>Join us! We’ll help You take care of your plants:)</H1>
            <AuthButtonPrimary onClick={() => navigate("/register")}>
              Register
            </AuthButtonPrimary>
            <p>Already have an account?</p>
            <AuthButtonSecondary onClick={() => navigate("/login")}>
              Login
            </AuthButtonSecondary>
          </div>
        </StyledHome>
      ) : (
        <Flex
          flexdirection="column"
          alignitems="center"
          justifycontent="center"
          height="100%"
        >
          <h1>Home</h1>
          <p>
            <strong>This feature has not been developed yet.</strong>
          </p>
        </Flex>
      )}
    </>
  );
};

export default Home;
