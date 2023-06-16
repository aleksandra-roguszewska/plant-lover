import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import LandingPage from "./components/LandingPage/LandingPage";
import styles from "./App.module.css";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Plants from "./components/Plants/Plants";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return (
    <div className={styles.app}>
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
