import { Flex } from "../../components/UI/forms/Flex.styled";

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

const date = new Date();
const currYear = date.getFullYear();
const currMonth = date.getMonth();

const firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); // getting first day of month
const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last date of month
const lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // getting last day of month
const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month

console.log("firstDayofMonth:" + firstDayofMonth);
console.log("lastDateofMonth: " + lastDateofMonth);
console.log("lastDayofMonth: " + lastDayofMonth);
console.log("lastDateofLastMonth: " + lastDateofLastMonth);

const previousMonthDays: number[] = [];

for (let i = firstDayofMonth - 1; i > 0; i--) {
  // creating li of previous month last days
  previousMonthDays.push(lastDateofLastMonth - i + 1);
}

const currentMonthDays: number[] = [];

for (let i = 1; i <= lastDateofMonth; i++) {
  // creating li of all days of current month
  // adding active class to li if the current day, month, and year matched

  currentMonthDays.push(i);
}

const nextMonthDays: number[] = [];

for (let i = lastDayofMonth; i < 7; i++) {
  // creating li of next month first days
  currentMonthDays.push(i - lastDayofMonth + 1);
}

// `${months[currMonth]} ${currYear}

console.log(currentMonthDays);

const Calendar = () => {
  return (
    <Flex
      $flexdirection="column"
      alignitems="center"
      justifycontent="center"
      height="100%"
    >
      <div className="actual-calendar">
        <button>Previous month</button>
        <h2>
          {months[currMonth]} {currYear}
        </h2>
        <button>Next month</button>
        <ul>
          {previousMonthDays.map((item) => (
            <li>{item}</li>
          ))}

          {currentMonthDays.map((item) => {
            const isToday =
              item === date.getDate() &&
              currMonth === new Date().getMonth() &&
              currYear === new Date().getFullYear()
                ? "active"
                : "";
            return <li className={isToday}>{item}</li>;
          })}

          {nextMonthDays.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </Flex>
  );
};

export default Calendar;
