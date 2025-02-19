import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 w-full px-5 py-3 bg-gray-900 shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="text-xl font-bold text-white">
          FutsalArena
        </Link>
        <div className="space-x-1 md:space-x-2">
          <Button variant="ghost" className="p-1 hover:bg-transparent">
            <Link to="/" className="text-base font-medium text-white hover:text-red-500">
              Home
            </Link>
          </Button>
          <Button variant="ghost" className="p-1 hover:bg-transparent">
            <Link to="/login" className="text-base font-medium text-white hover:text-red-500">
              Login
            </Link>
          </Button>
          <Button variant="ghost" className="p-1 hover:bg-transparent">
            <Link to="/register" className="text-base font-medium text-white hover:text-red-500">
              Register
            </Link>
          </Button>
          <Button variant="ghost" className="p-1 hover:bg-transparent">
            <Link to="/booking" className="text-base font-medium text-white hover:text-red-500">
              Booking
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
