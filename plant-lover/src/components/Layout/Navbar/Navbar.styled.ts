import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: transparent;
    margin-right: 2rem;
    color: ${({ theme }) => theme.colors.primaryGreen};
    border: none;
    font-size: 1rem;

    &:hover {
      color: ${({ theme }) => theme.colors.accentPink};
    }
  }
`;
