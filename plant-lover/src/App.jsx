import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
  Navbar,
  LandingPage,
  Login,
  Register,
  Plants,
  Tasks,
} from "./components";
import styles from "./App.module.css";

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
