import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import image from "../assets/image.jpeg"; 

export default function BookingSuccess() {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate("/my-bookings"); 
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen p-6"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-teal-400/80"></div>

      <div className="relative z-10 w-full max-w-md p-6 bg-white shadow-xl rounded-2xl">
        <h2 className="mb-4 text-3xl font-bold text-center text-gray-900">
          Booking Successful!
        </h2>
        <p className="mb-6 text-lg text-center text-gray-700">
          Your booking has been successfully completed.
        </p>

       
        {/* <div className="mb-6 space-y-2">
          <p className="text-base text-gray-700">Event: Futsal Game</p>
          <p className="text-base text-gray-700">Date: February 20, 2025</p>
          <p className="text-base text-gray-700">Time: 5:00 PM</p>
        </div> */}

    
        <div className="flex justify-center">
          <Button
            onClick={handleGoToDashboard}
            className="w-full transition-all hover:-translate-y-0.5"
          >
            Go to Home
          </Button>
        </div>
      </div>
    </div>
  );
}