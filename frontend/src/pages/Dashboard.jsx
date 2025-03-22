import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { LayoutDashboardIcon, Calendar, Book, LogOut, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Dashboard = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      date: "2025-03-25",
      time: "18:00-19:00",
      court: "Court A",
    },
    {
      id: 2,
      date: "2025-03-30",
      time: "19:00-20:00",
      court: "Court B",
    },
  ]);

  const handleCancelBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
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
              <LayoutDashboardIcon size={18} /> Dashboard
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
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="mb-6 text-3xl font-semibold">My Dashboard</h1>

        {/* User Bookings Section */}
        <Card className="mb-6">
          <CardHeader>
            <h2 className="text-xl font-semibold">My Bookings</h2>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm">
              View and manage your futsal court bookings.
            </p>
            {/* Booking Table or List */}
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Court</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Time</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="px-4 py-2">{booking.court}</td>
                    <td className="px-4 py-2">{booking.date}</td>
                    <td className="px-4 py-2">{booking.time}</td>
                    <td className="px-4 py-2">
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Button to Book New Court */}
            <Button className="mt-4 text-white bg-green-600">
              <Link to="/book-now"> Book a Court</Link>
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Profile Card */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">My Profile</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p>John Doe</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">username</p>
                  <p>john.doe@example.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              {/* <Button className="mt-4 text-gray-700 bg-gray-200">Edit Profile</Button> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
