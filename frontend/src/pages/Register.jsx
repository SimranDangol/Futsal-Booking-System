import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/image.jpeg";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          username: formData.username,
          password: formData.password
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
      
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-teal-400/80"></div>

      <Card className="relative z-10 shadow-xl w-96 bg-white/95 backdrop-blur-sm">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-center">
            Create an Account
          </h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 transition border-gray-300 shadow-sm hover:border-gray-500"
              />
            </div>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                className="mt-2 transition border-gray-300 shadow-sm hover:border-gray-500"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="mt-2 transition border-gray-300 shadow-sm hover:border-gray-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <Button
            onClick={handleSubmit}
            className="w-full text-white bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500"
          >
            Register
          </Button>
          <div className="mt-4 text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
