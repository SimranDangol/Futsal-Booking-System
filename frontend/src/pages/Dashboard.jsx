import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import ConfirmationModal from "./ConfirmationModal"; // Adjust the import path accordingly

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingToCancel, setBookingToCancel] = useState(null);
  const navigate = useNavigate();

  // Fetch all bookings from the backend
  useEffect(() => {
    fetch("http://localhost:8080/api/bookings/all")
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error fetching bookings:", error));
  }, []);
  const handleLogout = () => {
    // Perform logout operations, e.g., clearing user data
    localStorage.removeItem("username");
    // Navigate to the home page
    navigate("/");
  };
  
  const openCancelModal = (id) => {
    setBookingToCancel(id);
  };

  const handleConfirmCancel = async () => {
    try {
      await fetch(`http://localhost:8080/api/bookings/${bookingToCancel}`, { method: "DELETE" });
      setBookings(bookings.filter((booking) => booking.id !== bookingToCancel));
    } catch (error) {
      console.error("Error canceling booking:", error);
    } finally {
      setBookingToCancel(null);
    }
  };

  const handleCancelModal = () => {
    setBookingToCancel(null);
  };

  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="mb-6 text-3xl font-semibold">Admin Dashboard</h1>

        {/* Booking Management Section */}
        <Card className="mb-6">
          <CardHeader>
            <h2 className="text-xl font-semibold">All Bookings</h2>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm">Manage all futsal court bookings.</p>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Customer</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Slot</th>
                  <th className="px-4 py-2 text-left">Phone</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length > 0 ? (
                  bookings.map((booking) => (
                    <tr key={booking.id} className="border-b">
                      <td className="px-4 py-2">{booking.id}</td>
                      <td className="px-4 py-2">{booking.name}</td>
                      <td className="px-4 py-2">{booking.bookingDate}</td>
                      <td className="px-4 py-2">{booking.slot}</td>
                      <td className="px-4 py-2">{booking.phoneNumber}</td>
                      <td className="px-4 py-2">
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => openCancelModal(booking.id)}
                        >
                          Cancel
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-4 py-2 text-center">
                      No bookings found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <Button
  onClick={handleLogout}
  className="mt-4 text-white bg-red-600"
>
  Logout
</Button>

          </CardContent>
        </Card>
      </div>

      {/* Custom Confirmation Modal */}
      {bookingToCancel !== null && (
        <ConfirmationModal
          message="Do you want to cancel this booking?"
          onConfirm={handleConfirmCancel}
          onCancel={handleCancelModal}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
