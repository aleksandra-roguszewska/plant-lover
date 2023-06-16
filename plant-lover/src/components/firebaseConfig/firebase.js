// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1T4F9V7WAjLhuaIzYhEbXFWZ1txjWYi8",
  authDomain: "plant-lover-af7dc.firebaseapp.com",
  projectId: "plant-lover-af7dc",
  storageBucket: "plant-lover-af7dc.appspot.com",
  messagingSenderId: "792064667655",
  appId: "1:792064667655:web:97ff4a0db06c4bf0477aa2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
