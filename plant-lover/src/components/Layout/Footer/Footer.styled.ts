import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.primaryGreen};
  color: ${({ theme }) => theme.colors.primaryGreen};

  a {
    color: ${({ theme }) => theme.colors.primaryGreen};
    text-decoration: none;
    font-weight: 700;
  }

  a:hover {
    text-decoration: underline;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`;
