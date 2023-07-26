import styled from "styled-components";

type StyledPlantProps = {
  isHovered: boolean;
};

export const StyledPlant = styled.div<StyledPlantProps>`
  width: 220px;
  height: 283px;
  transition: ease-in-out 0.2s all;

  img {
    height: 220px;
    width: 220px;
    overflow: hidden;
    margin-bottom: 1.25rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    opacity: ${({ isHovered }) => (isHovered ? "0.5" : "1")};
    transition: ease-in-out 0.2s all;
    object-fit: cover;
  }

  div {
    position: relative;
  }

  div div {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  button {
    color: ${({ theme }) => theme.colors.primaryGreen};
    background-color: ${({ theme }) => theme.colors.white};
    width: 150px;
    height: 50px;
    font-size: 1rem;
    font-weight: 700;
    border: 1.5px solid ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    transition: ease-in-out 0.2s all;
  }

  button:hover {
    box-shadow: inset -0 0 3px 3px rgba(33, 66, 41, 0.1);
    background-color: ${({ theme }) => theme.colors.secondaryGreen};
    border: 1.5px solid ${({ theme }) => theme.colors.primaryGreen};
  }

  p {
    width: 100%;
    margin-bottom: 0.25rem;
  }
`;
