import { Flex } from "../../components/UI/Flex.styled";
import { useState } from "react";
import { currentDate } from "../../utils/currentDate";
import {
  StyledCalendar,
  InactiveDays,
  CalendarContainer,
  CalendarHeading,
  ActiveDay,
  Line,
} from "./Calendar.styled";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useAuth, { PlantData } from "../../context/AuthContext";
import Modal from "../../components/UI/Modal/Modal";

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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const { currentUserData } = useAuth();
  const plantData: PlantData[] = currentUserData?.plants ?? [];

  const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const isWateringNeeded = (date: Date): boolean => {
    if (date.getTime() >= currentDate.getTime()) {
      const oneDay = 24 * 60 * 60 * 1000;

      const alivePlants = plantData.filter((item) => !item.isDead);

      const plantsThatNeedWatering = alivePlants.filter((item) => {
        const lastWateringTime = item.lastWatering.toDate().getTime();
        const nextWateringTime =
          lastWateringTime + item.wateringFrequency * oneDay;
        const nextWateringDate = new Date(nextWateringTime);

        return isSameDay(nextWateringDate, date);
      });

      return plantsThatNeedWatering.length > 0;
    } else {
      return false;
    }
  };

  const getPlantsThatNeedWatering = (date: Date): Array<PlantData> => {
    if (date.getTime() >= currentDate.getTime()) {
      const oneDay = 24 * 60 * 60 * 1000;

      const alivePlants = plantData.filter((item) => !item.isDead);

      const plantsThatNeedWatering = alivePlants.filter((item) => {
        const lastWateringTime = item.lastWatering.toDate().getTime();
        const nextWateringTime =
          lastWateringTime + item.wateringFrequency * oneDay;
        const nextWateringDate = new Date(nextWateringTime);

        return isSameDay(nextWateringDate, date);
      });

      return plantsThatNeedWatering;
    } else {
      return [];
    }
  };

  const isFertilizationNeeded = (date: Date): boolean => {
    if (date.getTime() >= currentDate.getTime()) {
      const oneDay = 24 * 60 * 60 * 1000;

      const alivePlants = plantData.filter((item) => !item.isDead);

      const plantsThatNeedFertilization = alivePlants.filter((item) => {
        const lastFertilizationTime = item.lastFertilization.toDate().getTime();
        const nextFertilizationTime =
          lastFertilizationTime + item.fertilizationFrequency * oneDay;
        const nextFertilizationDate = new Date(nextFertilizationTime);

        return isSameDay(nextFertilizationDate, date);
      });

      return plantsThatNeedFertilization.length > 0;
    } else {
      return false;
    }
  };

  const getPlantsThatNeedFertilization = (date: Date): Array<PlantData> => {
    if (date.getTime() >= currentDate.getTime()) {
      const oneDay = 24 * 60 * 60 * 1000;

      const alivePlants = plantData.filter((item) => !item.isDead);

      const plantsThatNeedFertilization = alivePlants.filter((item) => {
        const lastFertilizationTime = item.lastFertilization.toDate().getTime();
        const nextFertilizationTime =
          lastFertilizationTime + item.fertilizationFrequency * oneDay;
        const nextFertilizationDate = new Date(nextFertilizationTime);

        return isSameDay(nextFertilizationDate, date);
      });

      return plantsThatNeedFertilization;
    } else {
      return [];
    }
  };

  const getDate = (day: number, month: number, year: number): Date => {
    return new Date(year, month, day);
  };

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

  const handleOneMonthEarlier = (displayedDate: Date) => {
    const newDate = new Date(displayedDate);
    const currentDay = newDate.getDate();
    newDate.setMonth(newDate.getMonth() - 1);
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
            <button onClick={() => handleOneMonthEarlier(displayedDate)}>
              <FaChevronLeft />
            </button>
            <h2>
              {months[displayedMonth]} {displayedYear}
            </h2>
            <button onClick={() => handleOneMonthLater(displayedDate)}>
              <FaChevronRight />
            </button>
          </CalendarHeading>
          <Line />
          <ul>
            {weekdays.map((item) => (
              <ActiveDay>{item}</ActiveDay>
            ))}
          </ul>

          <ul>
            {previousMonthDays.map((item) => (
              <InactiveDays>{item}</InactiveDays>
            ))}

            {currentMonthDays.map((item) => {
              const isToday =
                item === currentDate.getDate() &&
                displayedMonth === new Date().getMonth() &&
                displayedYear === new Date().getFullYear();

              const doPlantsNeedWater = isWateringNeeded(
                getDate(item, displayedMonth, displayedYear)
              );

              const doPlantsNeedFertilizer = isFertilizationNeeded(
                getDate(item, displayedMonth, displayedYear)
              );

              return (
                <>
                  <ActiveDay
                    isWateringNeeded={doPlantsNeedWater}
                    isFertilizationNeeded={doPlantsNeedFertilizer}
                    isToday={isToday}
                    onClick={() => {
                      setSelectedDay(item);
                      setIsModalVisible(true);
                    }}
                  >
                    {item}
                  </ActiveDay>
                </>
              );
            })}

            {nextMonthDays.map((item) => (
              <InactiveDays>{item}</InactiveDays>
            ))}
          </ul>
        </CalendarContainer>
      </Flex>

      {selectedDay !== null && (
        <Modal visible={isModalVisible} setVisible={setIsModalVisible}>
          <p>
            You need to water:{" "}
            {
              getPlantsThatNeedWatering(
                getDate(selectedDay, displayedMonth, displayedYear)
              ).length
            }
          </p>
          <p>
            You need to fertilize:{" "}
            {
              getPlantsThatNeedFertilization(
                getDate(selectedDay, displayedMonth, displayedYear)
              ).length
            }
          </p>
          <button onClick={() => setIsModalVisible(false)}>Cancel</button>
        </Modal>
      )}
    </StyledCalendar>
  );
};

export default Calendar;
