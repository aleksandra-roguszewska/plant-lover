import styled from "styled-components";

export const StyledPlant = styled.div`
  width: 220px;
  height: 283px;

  img {
    height: 220px;
    width: 220px;
    overflow: hidden;
    margin-bottom: 1.25rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  p {
    width: 100%;
    margin-bottom: 0.25rem;
  }
`;
