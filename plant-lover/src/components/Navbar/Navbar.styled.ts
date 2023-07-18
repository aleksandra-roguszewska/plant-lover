import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primaryGreen};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
