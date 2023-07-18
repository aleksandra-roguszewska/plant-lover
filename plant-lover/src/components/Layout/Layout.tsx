import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";
import { StyledLayout } from "./Layout.styled";

const Layout = () => {
  return (
    <StyledLayout>
      <Navbar />
      <main>
        <Toaster />
        <Outlet />
      </main>

      <Footer />
    </StyledLayout>
  );
};

export default Layout;
