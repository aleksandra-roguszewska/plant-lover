import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

interface CustomNavLinkProps extends NavLinkProps {
  exact?: boolean;
  isActive?: any;
}

export const NavbarLink = styled(NavLink)<CustomNavLinkProps>`
  color: ${({ theme }) => theme.colors.primaryGreen};
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  transition: ease-in-out 0.2s all;
  margin-right: 2rem;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentPink};
  }
`;
