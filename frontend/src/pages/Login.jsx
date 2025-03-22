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
import { Link } from "react-router-dom";
import image from "../assets/image.jpeg";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-teal-400/80"></div>

      <Card className="relative z-10 shadow-xl w-96 bg-white/95 backdrop-blur-sm">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <Button
            onClick={handleSubmit}
            className="w-full text-white bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500"
          >
            Login
          </Button>
          <div className="mt-4 text-center">
            <p className="text-sm">
              {"Don't"} have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
