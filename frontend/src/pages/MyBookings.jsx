import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Home, Calendar, Book, LogOut, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Bookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      date: "2025-03-22",
      time: "18:00-19:00",
      court: "Court A",
    },
    {
      id: 2,
      date: "2025-03-20",
      time: "20:00-21:00",
      court: "Court B",
    },
  ]);

  const handleCancelBooking = (id) => {
    // Filter out the canceled booking
    setBookings(bookings.filter(booking => booking.id !== id));
    //   make an API call here
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="flex flex-col justify-between w-64 p-6 text-white bg-slate-800">
        <div>
          <nav className="space-y-4">
            <Link
              to="/dashboard"
              className="flex items-center w-full gap-2 px-2 py-1 text-left rounded hover:bg-slate-700"
            >
              <Home size={18} /> Dashboard
            </Link>
            <Separator className="bg-slate-600" />
            <Link
              to="/book-now"
              className="flex items-center w-full gap-2 px-2 py-1 text-left rounded hover:bg-slate-700"
            >
              <Book size={18} /> Book
            </Link>
            <Separator className="bg-slate-600" />
            <Link
              to="/my-bookings"
              className="flex items-center w-full gap-2 px-2 py-1 text-left rounded hover:bg-slate-700"
            >
              <Calendar size={18} /> My Bookings
            </Link>
          </nav>
        </div>
        <Button
          variant="destructive"
          className="flex items-center w-full gap-2 mt-auto"
        >
          <LogOut size={18} /> Logout
        </Button>
      </div>

      {/* Separator */}
      <Separator orientation="vertical" className="h-full" />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">My Bookings</h1>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Court</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id} className="hover:bg-gray-50">
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>{booking.time}</TableCell>
                <TableCell>{booking.court}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => handleCancelBooking(booking.id)}
                      className="flex items-center gap-1"
                    >
                      <X size={14} /> Cancel
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Bookings;
