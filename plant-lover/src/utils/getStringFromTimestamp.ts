import { Timestamp } from "firebase/firestore";

export const getStringFromTimestamp = (date: Timestamp): string => {
  const dateString = date.toDate().toDateString();
  const dateArray = dateString.split(" ");
  const day = dateArray[2];
  let month = dateArray[1];
  const year = dateArray[3];
  if (month === "Jan") {
    month = "01";
  } else if (month === "Feb") {
    month = "02";
  } else if (month === "Mar") {
    month = "03";
  } else if (month === "Apr") {
    month = "04";
  } else if (month === "May") {
    month = "05";
  } else if (month === "Jun") {
    month = "06";
  } else if (month === "Jul") {
    month = "07";
  } else if (month === "Aug") {
    month = "08";
  } else if (month === "Sep") {
    month = "09";
  } else if (month === "Oct") {
    month = "10";
  } else if (month === "Nov") {
    month = "11";
  } else {
    month = "12";
  }
  return [day, month, year].join(".");
};
