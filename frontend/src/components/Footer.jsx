import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 mt-3 text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="container grid grid-cols-1 gap-8 px-6 mx-auto md:px-12 md:grid-cols-4">
        {/* About Section */}
        <section className="space-y-3">
          <h3 className="text-2xl font-bold">About Us</h3>
          <p className="text-base text-gray-200">
            We provide an easy-to-use futsal booking system to make your sports
            experience effortless and fun.
          </p>
        </section>

        {/* Links Section */}
        <section className="space-y-3">
          <h3 className="text-2xl font-bold">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link
                to="/"
                className="text-sm text-gray-200 transition duration-300 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/book-now"
                className="text-sm text-gray-200 transition duration-300 hover:text-white"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="space-y-3">
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <p className="text-base text-gray-200">Email: www@example.com</p>
          <p className="text-base text-gray-200">Phone: +977 010101924</p>
        </section>

        {/* Social Media Section */}
        <section className="space-y-3">
          <h3 className="text-2xl font-bold">Follow Us</h3>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="text-white transition duration-300 bg-transparent border-white hover:bg-white hover:text-blue-500"
            >
              <Facebook size={20} />
            </Button>
            <Button
              variant="outline"
              className="text-white transition duration-300 bg-transparent border-white hover:bg-white hover:text-blue-400"
            >
              <Twitter size={20} />
            </Button>
            <Button
              variant="outline"
              className="text-white transition duration-300 bg-transparent border-white hover:bg-white hover:text-pink-500"
            >
              <Instagram size={20} />
            </Button>
          </div>
        </section>
      </div>

      {/* Footer Bottom Section */}
      <div className="pt-4 mt-8 text-center text-gray-400 border-t border-gray-600">
        <p className="text-sm">&copy; 2025 FutsalArena. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
