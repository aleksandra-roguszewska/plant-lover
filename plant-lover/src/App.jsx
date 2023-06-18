import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  Navbar,
  LandingPage,
  Login,
  Register,
  Plants,
  Tasks,
  AddPlantForm,
} from "./components";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./components/firebaseConfig/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("auth status changed", user);
      if (user) {
        getDoc(doc(db, "users", user.uid)).then((snapshot) => {
          console.log(snapshot.data());
          setUser({
            email: user.email,
            ...snapshot.data(),
          });
        });

        setIsAuth(true);
      } else {
        setIsAuth(false);
        setUser(null);
      }
    });
  }, []);

  return (
    <div className={styles.app}>
      {/* <div>{user?.email}</div> */}
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.page_content}>
        <Toaster />
        <Routes>
          {/* Publiczne ściezki */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Ściezki prywatne */}
          <Route path="/plants" element={<Plants />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/plants/addplant" element={<AddPlantForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
