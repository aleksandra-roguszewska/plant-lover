import { Flex } from "../../components/UI/forms/Flex.styled";
import { useState } from "react";
import { currentDate } from "../../utils/currentDate";
import {
  StyledCalendar,
  InactiveDays,
  CalendarContainer,
  CalendarHeading,
} from "./Calendar.styled";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Calendar = () => {
  const [displayedDate, setDisplayedDate] = useState(new Date());
  const displayedYear = displayedDate.getFullYear();
  const displayedMonth = displayedDate.getMonth();

  const firstDayofMonth = new Date(displayedYear, displayedMonth, 1).getDay(); // getting first day of month
  const lastDateofMonth = new Date(
    displayedYear,
    displayedMonth + 1,
    0
  ).getDate(); // getting last date of month
  const lastDayofMonth = new Date(
    displayedYear,
    displayedMonth,
    lastDateofMonth
  ).getDay(); // getting last day of month
  const lastDateofLastMonth = new Date(
    displayedYear,
    displayedMonth,
    0
  ).getDate(); // getting last date of previous month

  const previousMonthDays: number[] = [];

  for (let i = firstDayofMonth - 1; i > 0; i--) {
    previousMonthDays.push(lastDateofLastMonth - i + 1);
  }

  const currentMonthDays: number[] = [];

  for (let i = 1; i <= lastDateofMonth; i++) {
    currentMonthDays.push(i);
  }

  const nextMonthDays: number[] = [];

  for (let i = lastDayofMonth; i < 7; i++) {
    nextMonthDays.push(i - lastDayofMonth + 1);
  }

  const handleOneMonthLater = (displayedDate: Date) => {
    const newDate = new Date(displayedDate);
    const currentDay = newDate.getDate();
    newDate.setMonth(newDate.getMonth() + 1);
    // If the resulting month is ahead of the current month, we are safe to set the day to the original day.
    // Otherwise, it means the current day does not exist in the next month (e.g., January 31st to February),
    // so we set the day to the last day of the next month.
    if (newDate.getDate() !== currentDay) {
      newDate.setDate(0);
    }

    setDisplayedDate(newDate);
  };

  return (
    <StyledCalendar>
      <Flex
        $flexdirection="column"
        alignitems="center"
        justifycontent="center"
        height="100%"
      >
        <CalendarContainer>
          <CalendarHeading>
            <button>
              <FaChevronLeft />
            </button>
            <h2>
              {months[displayedMonth]} {displayedYear}
            </h2>
            <button onClick={() => handleOneMonthLater(displayedDate)}>
              <FaChevronRight />
            </button>
          </CalendarHeading>
          <ul>
            {previousMonthDays.map((item) => (
              <InactiveDays>{item}</InactiveDays>
            ))}

            {currentMonthDays.map((item) => {
              const isToday =
                item === currentDate.getDate() &&
                displayedMonth === new Date().getMonth() &&
                displayedYear === new Date().getFullYear()
                  ? "active"
                  : "";
              return <li className={isToday}>{item}</li>;
            })}

            {nextMonthDays.map((item) => (
              <InactiveDays>{item}</InactiveDays>
            ))}
          </ul>
        </CalendarContainer>
      </Flex>
    </StyledCalendar>
  );
};

export default Calendar;
