import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarLink = styled(Link)`
  color: white;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;

  margin-right: 2rem;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentPink};
  }
  &:active {
    color: ${({ theme }) => theme.colors.accentPink};
  }
`;
