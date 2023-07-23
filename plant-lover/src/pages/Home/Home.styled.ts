import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    max-width: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  h1 {
    text-align: center;
    margin-bottom: 0;
    text-transform: none;
  }
`;

export const StyledHomeLoggedIn = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 2.25rem 2.5rem;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  h1 {
    text-align: center;
    margin: 0;
    text-transform: none;
    font-size: 39px;
    img {
      height: 0.7em;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      text-align: center;
      p {
        margin-top: 0.35rem;
      }
      a {
        color: ${({ theme }) => theme.colors.accentPink};
      }
    }
  }
`;
