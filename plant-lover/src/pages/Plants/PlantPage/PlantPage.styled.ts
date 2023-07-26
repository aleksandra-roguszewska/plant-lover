import styled from "styled-components";

export const StyledPlantPage = styled.div`
  /* background-color: ${({ theme }) => theme.colors.lightGrey}; */
  height: 100%;
  display: flex;
  align-items: center;
  /* align-items: center; */
  justify-content: center;

  div {
    margin-bottom: 0.5rem;
  }

  div:last-child {
    margin-bottom: 0;
  }

  img {
    height: 480px;
    width: 480px;
    object-fit: cover;
  }

  p {
    font-size: 14px;
  }
`;

type PlantActionButtonProps = {
  $backgroundcolor: string;
};

export const PlantActionButton = styled.div<PlantActionButtonProps>`
  background-color: ${({ $backgroundcolor }) =>
    $backgroundcolor ? $backgroundcolor : "grey"};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  height: 50px;
  width: 150px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  text-transform: uppercase;
  transition: ease-in-out 0.2s all;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

type AlertProps = {
  $isLate: boolean;
};

export const Alert = styled.p<AlertProps>`
  color: ${({ theme, $isLate }) =>
    $isLate ? theme.colors.accentPink : theme.colors.primaryGreen};
  font-weight: 700;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryGreen};
  width: 1200px;
  overflow: hidden;
  height: 480px;
`;

export const BottomButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-self: flex-end;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 420px;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 0;
`;
