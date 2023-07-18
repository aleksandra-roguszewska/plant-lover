import styled from "styled-components";

export const StyledLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr auto;
  grid-template-areas:
    "navbar"
    "page_content"
    "footer";
  margin: 0 3.75rem;

  nav {
    grid-area: navbar;
  }

  main {
    grid-area: page_content;
  }

  footer {
    grid-area: footer;
  }
`;
