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
  }
`;
