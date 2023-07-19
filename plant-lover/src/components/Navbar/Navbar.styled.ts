import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primaryGreen};
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: transparent;
    margin-right: 2rem;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    font-size: 1rem;

    &:hover {
      color: ${({ theme }) => theme.colors.accentPink};
    }
  }
`;
