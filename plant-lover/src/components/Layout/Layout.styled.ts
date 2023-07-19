import styled from "styled-components";

export const StyledLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr auto;
  grid-template-areas:
    "navbar"
    "page_content"
    "footer";

  nav {
    grid-area: navbar;
    padding: 0 3rem;
  }

  main {
    grid-area: page_content;
    padding: 0 3rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  footer {
    grid-area: footer;
    padding: 0 3rem;
  }
`;
