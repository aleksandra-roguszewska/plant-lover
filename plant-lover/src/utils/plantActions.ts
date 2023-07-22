import { Timestamp, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { db } from "../config/firebase";

export const isActionLate = (
  lastAction: Timestamp,
  actionFrequency: number,
  currentDate: Date
) => {
  const timeSinceLastAction = Math.floor(
    (currentDate.getTime() - lastAction.toDate().getTime()) /
      (1000 * 60 * 60 * 24)
  );

  let isActionLate = false;

  if (timeSinceLastAction >= actionFrequency) {
    isActionLate = true;
  }
  return isActionLate;
};

export const countTimeToNextAction = (
  lastAction: Timestamp,
  actionFrequency: number,
  currentDate: Date
) => {
  const timeSinceLastAction = Math.floor(
    (currentDate.getTime() - lastAction.toDate().getTime()) /
      (1000 * 60 * 60 * 24)
  );

  const timeToNextAction = actionFrequency - timeSinceLastAction;

  return timeToNextAction;
};

export const water = async (
  currentUser: any,
  currentUserData: any,
  plantInfo: any,
  currentDate: Date
) => {
  const docRef = doc(db, "users", currentUser.uid);
  const updatedPlantInfo = { ...plantInfo, lastWatering: currentDate };
  const updatedUser = { ...currentUserData };

  const plantIndex = currentUserData.plants.findIndex(
    (item: any) => item.id === plantInfo.id
  );

  updatedUser.plants[plantIndex] = updatedPlantInfo;
  try {
    await updateDoc(docRef, updatedUser);
    toast.success("Your plant has been watered:)");
  } catch (err) {
    toast.error("An error occured. Try again later.");
    console.log(err);
  }
};

export const fertilize = async (
  currentUser: any,
  currentUserData: any,
  plantInfo: any,
  currentDate: Date
) => {
  const docRef = doc(db, "users", currentUser.uid);
  const updatedPlantInfo = { ...plantInfo, lastFertilization: currentDate };
  const updatedUser = { ...currentUserData };

  const plantIndex = currentUserData.plants.findIndex(
    (item: any) => item.id === plantInfo.id
  );

  updatedUser.plants[plantIndex] = updatedPlantInfo;
  try {
    await updateDoc(docRef, updatedUser);
    toast.success("Your plant has been fertilized:)");
  } catch (err) {
    toast.error("An error occured. Try again later.");
    console.log(err);
  }
};

export const killPlant = async (
  currentUser: any,
  currentUserData: any,
  plantInfo: any
) => {
  const docRef = doc(db, "users", currentUser.uid);
  const updatedPlantInfo = { ...plantInfo, isDead: true };
  const updatedUser = { ...currentUserData };

  const plantIndex = currentUserData.plants.findIndex(
    (item: any) => item.id === plantInfo.id
  );

  updatedUser.plants[plantIndex] = updatedPlantInfo;
  try {
    await updateDoc(docRef, updatedUser);
    toast("Your plant has been moved to cemetry:(", {
      icon: "💀",
    });
  } catch (err) {
    toast.error("An error occured. Try again later.");
    console.log(err);
  }
};
