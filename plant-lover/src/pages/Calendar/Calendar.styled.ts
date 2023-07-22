import styled from "styled-components";

export const StyledCalendar = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(7, 54px);
    grid-auto-rows: 54px;
    gap: 20px 46px;
    list-style: none;
  }

  .active {
    background-color: lightblue;
    border-radius: 50%;
  }

  li {
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 1rem;
  }
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const CalendarHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type ActiveDayProps = {
  isWateringNeeded?: boolean;
  isFertilizationNeeded?: boolean;
  isToday?: boolean;
  onClick?: any;
};

export const ActiveDay = styled.li<ActiveDayProps>`
  border: ${({ isToday, theme }) =>
    isToday ? `2px solid ${theme.colors.accentPink}` : "none"};
  border-radius: 50%;
  background-color: ${({ isWateringNeeded, isFertilizationNeeded, theme }) =>
    isWateringNeeded || isFertilizationNeeded
      ? isWateringNeeded && isFertilizationNeeded
        ? theme.colors.primaryGreen
        : theme.colors.secondaryGreen
      : "transparent"};
`;

export const InactiveDays = styled.li`
  color: lightgrey;
`;
