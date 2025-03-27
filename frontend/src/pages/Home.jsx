
// import { Button } from "../components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "../components/ui/card";
// import { Link } from "react-router-dom";
// import futsal from "../../public/futsal.jpeg";
// import img from "../assets/img.jpeg";
// import image from "../assets/image.jpeg";
// import court from "../assets/court.jpeg";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const history = useNavigate();

//   const handleBookNowClick = () => {
//     if (isLoggedIn) {
//       toast.success("You are logged in! Proceed with booking.");
//       history.push("/book-now"); 
//     } else {
//       toast.error("Please log in to book a futsal session.");
//     }
//   };

//   return (
//     <>
//       {/* Top Section */}
//       <div className="py-20 bg-gradient-to-r from-blue-500 to-teal-400">
//         <div className="container px-4 mx-auto text-center">
//           <h1 className="mb-6 text-5xl font-bold leading-tight text-white">
//             Effortless Futsal
//             <br />
//             Booking System
//           </h1>
//           <p className="mb-12 text-lg text-white md:text-xl opacity-80">
//             Seamless login, registration, payment, and booking experience.
//           </p>
//           <Button
//             size="lg"
//             variant="outline"
//             className="text-white transition duration-300 border-none rounded-full bg-slate-950 hover:bg-slate-800 "
//           >
//             <Link to="/booking" className="text-white rounded-md">
//               Book Now
//             </Link>
//           </Button>
//         </div>

//         {/* Feature Cards Section */}
//         <div className="container grid gap-8 px-4 mx-auto mt-16 md:grid-cols-3">
//           <Card className="flex flex-col justify-between p-8 text-white shadow-lg bg-white/10 backdrop-blur-sm rounded-xl">
//             <CardHeader>
//               <CardTitle className="text-2xl font-semibold text-center">
//                 User Registration
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="flex-grow text-center">
//               <p>Create your account and start booking today.</p>
//             </CardContent>
//           </Card>
//           <Card className="flex flex-col justify-between p-8 text-white shadow-lg bg-white/10 backdrop-blur-sm rounded-xl">
//             <CardHeader>
//               <CardTitle className="text-2xl font-semibold text-center">
//                 Secure Access
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="flex-grow text-center">
//               <p>Protected and reliable access control</p>
//             </CardContent>
//           </Card>
//           <Card className="flex flex-col justify-between p-8 text-white shadow-lg bg-white/10 backdrop-blur-sm rounded-xl">
//             <CardHeader>
//               <CardTitle className="text-2xl font-semibold text-center">
//                 Instant Access
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="flex-grow text-center">
//               <p>Quick and easy reservation process</p>
//             </CardContent>
//           </Card>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="flex flex-col items-center justify-between gap-16 px-4 mb-16 md:flex-row md:px-16">
//         <div className="flex-1 space-y-6 text-center md:text-left">
//           <h1 className="text-5xl font-bold leading-tight text-gray-800">
//             Your Futsal Experience
//             <br />
//             Starts Here
//           </h1>
//           <p className="mb-6 text-lg text-gray-600">
//             Discover our comprehensive platform for all your futsal needs.
//           </p>
//           <Button
//             size="lg"
//             className="text-white transition duration-300 rounded-full bg-slate-950 hover:bg-slate-800"
//             onClick={handleBookNowClick} // Handle click
//           >
//             <Link to="/booking">Book Now</Link>
//           </Button>
//         </div>
//         <div className="flex items-center justify-center flex-1 p-4">
//           <img
//             src={futsal}
//             alt="Futsal court"
//             className="rounded-lg max-w-full h-[450px] w-[400px] object-cover shadow-lg"
//           />
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <div className="my-1 space-y-6 text-center">
//         <h2 className="text-3xl font-bold text-gray-800">Futsal Gallery</h2>
//         <p className="text-gray-600 opacity-80">
//           Explore our vibrant futsal moments captured in stunning visuals.
//         </p>

//         <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-4">
//           <div className="relative group">
//             <img
//               src={image}
//               alt="Futsal court A"
//               className="rounded-lg w-full h-[300px] object-cover shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-105"
//             />
//           </div>

//           {/* Court B */}
//           <div className="relative group">
//             <img
//               src={court}
//               alt="Futsal court B"
//               className="rounded-lg w-full h-[300px] object-cover shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-105"
//             />
//           </div>

//           {/* Court C */}
//           <div className="relative group">
//             <img
//               src={futsal}
//               alt="Futsal court C"
//               className="rounded-lg w-full h-[300px] object-cover shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-105"
//             />
//           </div>

//           {/* Court D */}
//           <div className="relative group">
//             <img
//               src={img}
//               alt="Futsal court D"
//               className="rounded-lg w-full h-[300px] object-cover shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-105"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;


import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import futsal from "../../public/futsal.jpeg";
import img from "../assets/img.jpeg";
import image from "../assets/image.jpeg";
import court from "../assets/court.jpeg";
import { toast } from "sonner";

const Home = () => {
  // This state determines whether the user is logged in.
  // For demo purposes, it is set to false.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    if (!isLoggedIn) {
      toast.error("You need to log in to book, please login first.");
      return;
    }
    toast.success("You are logged in! Proceed with booking.");
    navigate("/book-now");
  };

  return (
    <>
      {/* Top Section */}
      <div className="py-20 bg-gradient-to-r from-blue-500 to-teal-400">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white">
            Effortless Futsal
            <br />
            Booking System
          </h1>
          <p className="mb-12 text-lg text-white md:text-xl opacity-80">
            Seamless login, registration, payment, and booking experience.
          </p>
          <Button
            size="lg"
            variant="outline"
            onClick={handleBookNowClick}
            className="text-white transition duration-300 border-none rounded-full bg-slate-950 hover:bg-slate-800"
          >
            Book Now
          </Button>
        </div>

        {/* Feature Cards Section */}
        <div className="container grid gap-8 px-4 mx-auto mt-16 md:grid-cols-3">
          <Card className="flex flex-col justify-between p-8 text-white shadow-lg bg-white/10 backdrop-blur-sm rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center">
                User Registration
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-center">
              <p>Create your account and start booking today.</p>
            </CardContent>
          </Card>
          <Card className="flex flex-col justify-between p-8 text-white shadow-lg bg-white/10 backdrop-blur-sm rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center">
                Secure Access
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-center">
              <p>Protected and reliable access control</p>
            </CardContent>
          </Card>
          <Card className="flex flex-col justify-between p-8 text-white shadow-lg bg-white/10 backdrop-blur-sm rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center">
                Instant Access
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow text-center">
              <p>Quick and easy reservation process</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-between gap-16 px-4 mb-16 md:flex-row md:px-16">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight text-gray-800">
            Your Futsal Experience
            <br />
            Starts Here
          </h1>
          <p className="mb-6 text-lg text-gray-600">
            Discover our comprehensive platform for all your futsal needs.
          </p>
          <Button
            size="lg"
            className="text-white transition duration-300 rounded-full bg-slate-950 hover:bg-slate-800"
            onClick={handleBookNowClick}
          >
            Book Now
          </Button>
        </div>
        <div className="flex items-center justify-center flex-1 p-4">
          <img
            src={futsal}
            alt="Futsal court"
            className="rounded-lg max-w-full h-[450px] w-[400px] object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="my-1 space-y-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Futsal Gallery</h2>
        <p className="text-gray-600 opacity-80">
          Explore our vibrant futsal moments captured in stunning visuals.
        </p>
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="relative group">
            <img
              src={image}
              alt="Futsal court A"
              className="rounded-lg w-full h-[300px] object-cover shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          {/* Court B */}
          <div className="relative group">
            <img
              src={court}
              alt="Futsal court B"
              className="rounded-lg w-full h-[300px] object-cover shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          {/* Court C */}
          <div className="relative group">
            <img
              src={futsal}
              alt="Futsal court C"
              className="rounded-lg w-full h-[300px] object-cover shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
          {/* Court D */}
          <div className="relative group">
            <img
              src={img}
              alt="Futsal court D"
              className="rounded-lg w-full h-[300px] object-cover shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
