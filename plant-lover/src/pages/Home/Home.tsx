import { useNavigate } from "react-router";
import { AuthButtonPrimary } from "../../components/UI/buttons/AuthButtonPrimary.styled";
import { AuthButtonSecondary } from "../../components/UI/buttons/AuthButtonSecondary.styled";
import { H1 } from "../../components/UI/text/H1.style";
import { StyledHome, StyledHomeLoggedIn } from "./Home.styled";
import useAuth from "../../context/AuthContext";
import { Flex } from "../../components/UI/Flex.styled";
import { NavbarLink } from "../../components/Layout/Navbar/NavbarLink/NavbarLink.styled";
import { P } from "../../components/UI/text/P.style";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  return (
    <>
      {!currentUser ? (
        <StyledHome>
          <div>
            <H1>Join us! We’ll help You take care of your plants :)</H1>
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
        <Flex $justifycontent="center" $alignitems="center" $height="100%">
          <StyledHomeLoggedIn>
            <H1>Welcome to Plantlover!</H1>
            <ul>
              <li>
                <NavbarLink to="/plants">Plants</NavbarLink>
                <P>
                  View all your plants, access their details, and add new plants
                  to your collection.
                </P>
              </li>
              <li>
                <NavbarLink to="/tasks">Tasks</NavbarLink>
                <P>
                  Keep track of plant care tasks for the current day, including
                  watering and fertilizing schedules.
                </P>
              </li>
              <li>
                <NavbarLink to="/tasks">Calendar</NavbarLink>
                <P>
                  A convenient calendar displaying marked dates for watering and
                  fertilizing your plants.
                </P>
              </li>
              <li>
                <NavbarLink to="/tasks">Cemetery</NavbarLink>
                <P>A dedicated space to commemorate your deceased plants.</P>
              </li>
            </ul>
          </StyledHomeLoggedIn>
        </Flex>
      )}
    </>
  );
};

export default Home;
