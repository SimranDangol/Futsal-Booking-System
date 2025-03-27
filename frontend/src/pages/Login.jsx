import React, { useState } from 'react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import image from "../assets/image.jpeg";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', formData);
      const user = response.data;
      toast.success('Login successful'); // Toastify success message
      localStorage.setItem('username', formData.username);
      if (user.role === 'admin') {
        navigate('/dashboard');
      } else {
        navigate('/login-success'); // Navigate to the login success page
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-teal-400/80"></div>

      <div className="relative z-10 shadow-xl w-96 bg-white/95 backdrop-blur-sm">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">Welcome Back</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-md shadow-sm hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm">
              {"Don't"} have an account?{' '}
              <a href="/register" className="text-blue-600 hover:underline">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default Login;
