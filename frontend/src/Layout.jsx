import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  const location = useLocation();
  const hideNavbarRoutes = [
    "/book-now",
    "/my-bookings",
    "/payment",
    "/booking-success",
    "/login-success",
    "/dashboard"
  ];
  
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
