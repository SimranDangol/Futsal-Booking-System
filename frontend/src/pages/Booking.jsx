// import { useEffect, useState } from "react";
// import { format } from "date-fns";
// import { Calendar as CalendarIcon } from "lucide-react";
// import { toast } from "sonner";
// import { cn } from "../lib/utils";
// import { Button } from "../components/ui/button";
// import { Calendar } from "../components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "../components/ui/popover";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../components/ui/select";
// import { Input } from "../components/ui/input";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
// } from "../components/ui/card";
// import { useNavigate } from "react-router-dom";
// import futsal from "../../public/futsal.jpeg"; 

// export default function Booking() {
//   const [date, setDate] = useState(null);
//   const [time, setTime] = useState("");
//   const [name, setName] = useState("");
//   const [contact, setContact] = useState("");
//   const navigate = useNavigate();

//   const handleProceedToPayment = () => {
//     if (!date || !time || !name || !contact) {
//       toast.error("Please fill all fields before proceeding to payment.");
//       return;
//     }
//     navigate("/payment");
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div
//       className="relative flex items-center justify-center min-h-screen p-4 bg-center bg-cover"
//       style={{
//         backgroundImage: `url(${futsal})`,
//       }}
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-teal-400/80"></div>

//       <Card className="relative z-10 w-full max-w-md shadow-xl bg-white/95 backdrop-blur-sm rounded-xl">
//         <CardHeader className="text-center">
//           <CardTitle className="text-3xl font-semibold text-gray-800">
//             ⚽ Book Your Futsal Court
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           {/* Date Selection */}
//           <div className="space-y-2">
//             <label className="text-sm font-semibold text-gray-700">
//               Select Date
//             </label>
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button
//                   variant="outline"
//                   className={cn(
//                     "w-full justify-start text-left font-medium border-gray-300 shadow-sm transition hover:border-gray-500",
//                     !date && "text-gray-500"
//                   )}
//                 >
//                   <CalendarIcon className="w-5 h-5 mr-2 text-gray-600" />
//                   {date ? format(date, "PPP") : <span>Pick a date</span>}
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-auto p-0">
//                 <Calendar
//                   mode="single"
//                   selected={date}
//                   onSelect={setDate}
//                   initialFocus
//                 />
//               </PopoverContent>
//             </Popover>
//           </div>

//           {/* Time Selection */}
//           <div className="space-y-2">
//             <label className="text-sm font-semibold text-gray-700">
//               Select Time
//             </label>
//             <Select value={time} onValueChange={setTime}>
//               <SelectTrigger className="transition border-gray-300 shadow-sm hover:border-gray-500">
//                 <SelectValue placeholder="Choose a time" />
//               </SelectTrigger>
//               <SelectContent>
//                 {[
//                   "7:00 AM",
//                   "9:00 AM",
//                   "11:00 AM",
//                   "1:00 PM",
//                   "3:00 PM",
//                   "5:00 PM",
//                   "7:00 PM",
//                   "9:00 PM",
//                 ].map((t) => (
//                   <SelectItem key={t} value={t}>
//                     {t}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Name Input */}
//           <div className="space-y-2">
//             <label className="text-sm font-semibold text-gray-700">Name</label>
//             <Input
//               type="text"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="transition border-gray-300 shadow-sm hover:border-gray-500"
//             />
//           </div>

//           {/* Contact Input */}
//           <div className="space-y-2">
//             <label className="text-sm font-semibold text-gray-700">
//               Phone Number
//             </label>
//             <Input
//               type="tel"
//               placeholder="Enter your contact number"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//               className="transition border-gray-300 shadow-sm hover:border-gray-500"
//             />
//           </div>

//           {/* Proceed to Payment Button */}
//           <Button
//             onClick={handleProceedToPayment}
//             className="w-full py-3 text-base font-semibold text-white transition rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500"
//           >
//             Proceed to Payment
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Input } from "../components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { useNavigate } from "react-router-dom";
import futsal from "../../public/futsal.jpeg";

export default function Booking() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [noOfHours, setNoOfHours] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const handleProceedToPayment = async () => {
    // Check if all fields are filled
    if (!date || !time || !name || !contact) {
      toast.error("Please fill all fields before proceeding to payment.");
      return;
    }

    // Format the selected date as YYYY-MM-DD (ISO format)
    const formattedDate = format(date, "yyyy-MM-dd");

    // Build the booking payload. Note: Ensure the time value is in 24-hour format.
    const bookingPayload = {
      bookingDate: formattedDate,
      startTime: time, // our times array provides 24-hour formatted values like "07:00"
      noOfHours: noOfHours, // backend will parse this as an integer
      name: name,
      phoneNumber: contact,
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";
      const response = await fetch(`${apiUrl}/api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingPayload),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Booking failed");
      }
      toast.success("Booking created successfully!");
      navigate("/payment");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define available times in 24-hour format.
  const times = [
    "07:00",
    "09:00",
    "11:00",
    "1:00",
    "3:00",
    "5:00",
    "7:00",
    "9:00",
  ];

  return (
    <div
      className="relative flex items-center justify-center min-h-screen p-4 bg-center bg-cover"
      style={{ backgroundImage: `url(${futsal})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-teal-400/80"></div>

      <Card className="relative z-10 w-full max-w-md shadow-xl bg-white/95 backdrop-blur-sm rounded-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold text-gray-800">
            ⚽ Book Your Futsal Court
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Date Selection */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Select Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-medium border-gray-300 shadow-sm transition hover:border-gray-500",
                    !date && "text-gray-500"
                  )}
                >
                  <CalendarIcon className="w-5 h-5 mr-2 text-gray-600" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Selection */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Select Time
            </label>
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger className="transition border-gray-300 shadow-sm hover:border-gray-500">
                <SelectValue placeholder="Choose a time" />
              </SelectTrigger>
              <SelectContent>
                {times.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          

          {/* Name Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Name
            </label>
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="transition border-gray-300 shadow-sm hover:border-gray-500"
            />
          </div>

          {/* Phone Number Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <Input
              type="tel"
              placeholder="Enter your contact number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="transition border-gray-300 shadow-sm hover:border-gray-500"
            />
          </div>

          {/* Proceed to Payment Button */}
          <Button
            onClick={handleProceedToPayment}
            className="w-full py-3 text-base font-semibold text-white transition rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500"
          >
            Proceed to Payment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
