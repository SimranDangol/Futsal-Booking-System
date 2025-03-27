import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/image.jpeg"; // Ensure the path matches your project structure

const LoginSuccess = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/my-bookings");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="relative flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-teal-400/80"></div>
      
      <div className="relative z-10 p-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-semibold text-center">Login Successful!</h2>
        <p className="mt-4 text-center">Welcome, {username}!</p>
      </div>
    </div>
  );
};

export default LoginSuccess;
