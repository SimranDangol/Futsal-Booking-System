import { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Home,
  Calendar as CalendarLucide,
  Book,
  LogOut,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
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
import { Card, CardContent } from "../components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Separator } from "../components/ui/separator";
import { Calendar } from "../components/ui/calendar";
import futsal from "../../public/futsal.jpeg";

export default function Booking() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [contact, setContact] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "Guest";


  const handleProceedToPayment = () => {
    if (!date || !time || !contact) {
      toast.error("Please fill all fields before proceeding to payment.");
      return;
    }
  
    const bookingData = {
      bookingDate: format(date, "yyyy-MM-dd"),
      slot: time,
      name: username,
      phoneNumber: contact,
    };
  
    fetch("http://localhost:8080/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success(data.message);
          navigate("/payment");
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred while processing your booking.");
      });
  };
  
  

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    setOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timeSlots = [
    "7:00 AM - 8:00 AM",
    "8:00 AM - 9:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
  ];

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundImage: `url(${futsal})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Sidebar */}
      <div className="flex flex-col justify-between w-64 p-6 text-white bg-slate-800">
        <div className="text-lg font-bold mb-4">{username}</div>
        <div>
          <nav className="space-y-4">
          
            <Separator className="bg-slate-600" />
            <Link
              to="/book-now"
              className="flex items-center w-full gap-2 px-2 py-1 text-left rounded bg-slate-700"
            >
              <Book size={18} /> Book
            </Link>
            <Separator className="bg-slate-600" />
            <Link
              to="/my-bookings"
              className="flex items-center w-full gap-2 px-2 py-1 text-left rounded hover:bg-slate-700"
            >
              <CalendarLucide size={18} /> My Bookings
            </Link>
          </nav>
        </div>
        <Button
          variant="destructive"
          className="flex items-center w-full gap-2 mt-auto"
          onClick={handleLogout}
        >
          <LogOut size={18} /> Logout
        </Button>
      </div>

      <Separator orientation="vertical" className="h-full" />

      {/* Main content area */}
      <div className="flex items-center justify-center flex-1">
        <div className="w-full max-w-md p-6">
          <h1 className="mb-6 text-2xl font-bold text-center text-white">
            Book Your Futsal Court
          </h1>

          <Card className="bg-white shadow-xl">
            <CardContent className="p-6 space-y-6">
              {/* Date Selection */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Select Date
                </label>
                <Popover open={open} onOpenChange={setOpen}>
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
                      onSelect={handleDateSelect}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selection */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Select Time Slot
                </label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="transition border-gray-300 shadow-sm hover:border-gray-500">
                    <SelectValue placeholder="Choose a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Name Display */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Name
                </label>
                <Input
                  type="text"
                  value={username}
                  readOnly
                  className="transition border-gray-300 shadow-sm hover:border-gray-500"
                />
              </div>

              {/* Contact Input */}
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
      </div>
    </div>
  );
}