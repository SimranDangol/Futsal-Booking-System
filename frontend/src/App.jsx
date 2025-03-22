import { Route, RouterProvider } from "react-router";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "./components/ui/sonner";
import Payment from "./components/Payment";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/MyBookings";
import Booking from "./components/Booking";
import BookingSuccess from "./components/BookingSuccess";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="my-bookings" element={<Bookings />} />
      <Route path="payment" element={<Payment />} />
      <Route path="book-now" element={<Booking />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="booking-success" element={<BookingSuccess />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;
