import { Navbar } from "../index";
import styles from "../../App.module.css";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className={styles.app}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.page_content}>
        <Toaster />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
