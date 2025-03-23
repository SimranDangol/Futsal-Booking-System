
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Sidebar } from "../components/sidebar"; 

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar className="w-64 p-6 text-white bg-gray-800" />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="mb-6 text-3xl font-semibold">My Dashboard</h1>

        {/* Booking Management Section */}
        <Card className="mb-6">
          <CardHeader>
            <h2 className="text-xl font-semibold">My Bookings</h2>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm">Manage your futsal court bookings.</p>
            {/* Booking Table or List */}
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Customer</th>
                  <th className="px-4 py-2 text-left">Court</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">John Doe</td>
                  <td className="px-4 py-2">Court 1</td>
                  <td className="px-4 py-2">2025-03-10</td>
                  <td className="px-4 py-2">Pending</td>
                  <td className="px-4 py-2">
                    <Button className="text-white bg-red-500">Cancel</Button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Button to Add New Booking */}
            <Button className="mt-4 text-white bg-green-600">Add New Booking</Button>
          </CardContent>
        </Card>

        {/* Statistics Section */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Booking Statistics</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 text-center bg-blue-100 rounded-lg">
                <h3>Total Bookings</h3>
                <p>150</p>
              </div>
              <div className="p-4 text-center bg-orange-100 rounded-lg">
                <h3>Completed Bookings</h3>
                <p>120</p>
              </div>
              <div className="p-4 text-center bg-green-100 rounded-lg">
                <h3>Upcoming Bookings</h3>
                <p>30</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
