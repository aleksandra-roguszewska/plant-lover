import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryGreen};

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    background-color: transparent;
    margin-right: 2rem;
    color: ${({ theme }) => theme.colors.primaryGreen};
    border: none;
    font-size: 1rem;
    transition: ease-in-out 0.2s all;
    font-weight: 700;

    &:hover {
      color: ${({ theme }) => theme.colors.accentPink};
    }
  }
`;
