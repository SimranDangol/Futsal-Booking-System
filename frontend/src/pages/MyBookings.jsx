
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Calendar, Book, LogOut, X } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { Separator } from "@/components/ui/separator";
// import { toast } from "sonner";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { Calendar as CalendarUI } from "@/components/ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { format } from "date-fns";

// const timeSlots = [
//   "7:00 AM - 8:00 AM",
//   "8:00 AM - 9:00 AM",
//   "10:00 AM - 11:00 AM",
//   "11:00 AM - 12:00 PM",
//   "12:00 PM - 1:00 PM",
//   "1:00 PM - 2:00 PM",
//   "2:00 PM - 3:00 PM",
//   "4:00 PM - 5:00 PM",
//   "5:00 PM - 6:00 PM",
//   "6:00 PM - 7:00 PM",
// ];

// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [editBooking, setEditBooking] = useState(null);
//   const [editDate, setEditDate] = useState(null);
//   const [editTime, setEditTime] = useState("");
//   const [editPhone, setEditPhone] = useState("");
//   const [calendarOpen, setCalendarOpen] = useState(false);
//   const navigate = useNavigate();
//   const username = localStorage.getItem("username") || "Guest";
//   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
//   const [bookingToDelete, setBookingToDelete] = useState(null);
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await fetch(`http://localhost:8080/api/bookings?username=${username}`);
//         const data = await response.json();
//         setBookings(data);
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//       }
//     };
//     fetchBookings();
//   }, [username]);

//   const handleCancelBooking = async (id) => {
//     const confirmDelete = window.confirm("Do you want to delete Booking?");
//     if (!confirmDelete) return;
//     try {
//       const response = await fetch(`http://localhost:8080/api/bookings/${id}`, { method: "DELETE" });
//       if (response.ok) {
//         setBookings(bookings.filter((booking) => booking.id !== id));
//         toast.success("Booking canceled successfully.");
//       } else {
//         toast.error("Failed to cancel booking.");
//       }
//     } catch (error) {
//       console.error("Error canceling booking:", error);
//       toast.error("Error canceling booking.");
//     }
//   };

//   const handleOpenEditModal = (booking) => {
//     setEditBooking(booking);
//     setEditDate(new Date(booking.bookingDate));
//     setEditTime(booking.slot);
//     setEditPhone(booking.phoneNumber);
//   };

//   const handleEditSave = async () => {
//     if (!editDate || !editTime || !editPhone) {
//       toast.warning("Please fill in all fields.");
//       return;
//     }
//     const updatedBooking = {
//       bookingDate: format(editDate, "yyyy-MM-dd"),
//       slot: editTime,
//       phoneNumber: editPhone,
//       name: username,
//     };
//     try {
//       const response = await fetch(`http://localhost:8080/api/bookings/${editBooking.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedBooking),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         toast.success(data.message || "Booking updated successfully.");
//         setBookings(
//           bookings.map((b) => (b.id === editBooking.id ? { ...b, ...updatedBooking } : b))
//         );
//         setEditBooking(null);
//       } else {
//         toast.error(data.message || "Failed to update booking.");
//       }
//     } catch (error) {
//       console.error("Error updating booking:", error);
//       toast.error("Error updating booking.");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("username");
//     navigate("/");
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       <div className="flex flex-col justify-between w-64 p-6 text-white bg-slate-800">
//         <div className="text-lg font-bold mb-4">{username}</div>
//         <nav className="space-y-4">
//           <Separator className="bg-slate-600" />
//           <Link to="/book-now" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-700">
//             <Book size={18} /> Book
//           </Link>
//           <Separator className="bg-slate-600" />
//           <Link to="/my-bookings" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-700">
//             <Calendar size={18} /> My Bookings
//           </Link>
//         </nav>
//         <Button variant="destructive" className="mt-auto flex items-center gap-2" onClick={handleLogout}>
//           <LogOut size={18} /> Logout
//         </Button>
//       </div>

//       <Separator orientation="vertical" className="h-full" />

//       <div className="flex-1 p-6">
//         <h1 className="mb-6 text-2xl font-bold text-gray-800">My Bookings</h1>
//         <Table>
//           <TableHeader>
//             <TableRow className="bg-gray-50">
//               <TableHead>S.N</TableHead>
//               <TableHead>Date</TableHead>
//               <TableHead>Time Slot</TableHead>
//               <TableHead>Phone Number</TableHead>
//               <TableHead>Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {bookings.map((booking, index) => (
//               <TableRow key={booking.id} className="hover:bg-gray-50">
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{booking.bookingDate}</TableCell>
//                 <TableCell>{booking.slot}</TableCell>
//                 <TableCell>{booking.phoneNumber}</TableCell>
//                 <TableCell className="flex gap-2">
//                   <Button variant="outline" size="sm" onClick={() => handleOpenEditModal(booking)}>
//                     Edit
//                   </Button>
//                   <Button variant="destructive" size="sm" onClick={() => handleCancelBooking(booking.id)}>
//                     <X size={14} /> Cancel
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>

//       {editBooking && (
//         <Dialog open={!!editBooking} onOpenChange={(open) => { if (!open) setEditBooking(null); }}>
//           <DialogContent className="sm:max-w-lg">
//             <DialogHeader>
//               <DialogTitle>Edit Booking</DialogTitle>
//             </DialogHeader>
//             <div className="space-y-4">
//               <div className="space-y-2">
//                 <label className="text-sm font-semibold text-gray-700">Select Date</label>
//                 <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className="w-full justify-start text-left font-medium border-gray-300 shadow-sm transition hover:border-gray-500"
//                     >
//                       {editDate ? format(editDate, "PPP") : "Pick a date"}
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0">
//                     <CalendarUI
//                       mode="single"
//                       selected={editDate}
//                       onSelect={setEditDate}
//                       initialFocus
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-semibold text-gray-700">Select Time Slot</label>
//                 <Select value={editTime} onValueChange={setEditTime}>
//                   <SelectTrigger className="transition border-gray-300 shadow-sm hover:border-gray-500">
//                     <SelectValue placeholder="Choose a time slot" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {timeSlots.map((slot) => (
//                       <SelectItem key={slot} value={slot}>
//                         {slot}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-semibold text-gray-700">Phone Number</label>
//                 <Input
//                   type="tel"
//                   placeholder="Enter your contact number"
//                   value={editPhone}
//                   onChange={(e) => setEditPhone(e.target.value)}
//                   className="transition border-gray-300 shadow-sm hover:border-gray-500"
//                 />
//               </div>
//             </div>
//             <DialogFooter>
//               <Button variant="outline" onClick={() => setEditBooking(null)}>
//                 Cancel
//               </Button>
//               <Button onClick={handleEditSave}>
//                 Save
//               </Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export default Bookings;


import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Book, LogOut, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";

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

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [editBooking, setEditBooking] = useState(null);
  const [editDate, setEditDate] = useState(null);
  const [editTime, setEditTime] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [bookingToDelete, setBookingToDelete] = useState(null);
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "Guest";

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/bookings?username=${username}`);
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, [username]);

  const handleCancelBooking = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/bookings/${bookingToDelete}`, { 
        method: "DELETE" 
      });
      
      if (response.ok) {
        setBookings(bookings.filter((booking) => booking.id !== bookingToDelete));
        toast.success("Booking canceled successfully.");
      } else {
        toast.error("Failed to cancel booking.");
      }
    } catch (error) {
      console.error("Error canceling booking:", error);
      toast.error("Error canceling booking.");
    } finally {
      setBookingToDelete(null);
      setShowDeleteConfirmation(false);
    }
  };

  const handleOpenEditModal = (booking) => {
    setEditBooking(booking);
    setEditDate(new Date(booking.bookingDate));
    setEditTime(booking.slot);
    setEditPhone(booking.phoneNumber);
  };

  const handleEditSave = async () => {
    if (!editDate || !editTime || !editPhone) {
      toast.warning("Please fill in all fields.");
      return;
    }
    const updatedBooking = {
      bookingDate: format(editDate, "yyyy-MM-dd"),
      slot: editTime,
      phoneNumber: editPhone,
      name: username,
    };
    try {
      const response = await fetch(`http://localhost:8080/api/bookings/${editBooking.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBooking),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "Booking updated successfully.");
        setBookings(
          bookings.map((b) => (b.id === editBooking.id ? { ...b, ...updatedBooking } : b))
        );
        setEditBooking(null);
      } else {
        toast.error(data.message || "Failed to update booking.");
      }
    } catch (error) {
      console.error("Error updating booking:", error);
      toast.error("Error updating booking.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-col justify-between w-64 p-6 text-white bg-slate-800">
        <div className="text-lg font-bold mb-4">{username}</div>
        <nav className="space-y-4">
          <Separator className="bg-slate-600" />
          <Link to="/book-now" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-700">
            <Book size={18} /> Book
          </Link>
          <Separator className="bg-slate-600" />
          <Link to="/my-bookings" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-700">
            <Calendar size={18} /> My Bookings
          </Link>
        </nav>
        <Button variant="destructive" className="mt-auto flex items-center gap-2" onClick={handleLogout}>
          <LogOut size={18} /> Logout
        </Button>
      </div>

      <Separator orientation="vertical" className="h-full" />

      <div className="flex-1 p-6">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">My Bookings</h1>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>S.N</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time Slot</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking, index) => (
              <TableRow key={booking.id} className="hover:bg-gray-50">
                <TableCell>{index + 1}</TableCell>
                <TableCell>{booking.bookingDate}</TableCell>
                <TableCell>{booking.slot}</TableCell>
                <TableCell>{booking.phoneNumber}</TableCell>
                <TableCell className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleOpenEditModal(booking)}>
                    Edit
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => {
                      setBookingToDelete(booking.id);
                      setShowDeleteConfirmation(true);
                    }}
                  >
                    <X size={14} /> Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Edit Booking Dialog */}
      {editBooking && (
        <Dialog open={!!editBooking} onOpenChange={(open) => { if (!open) setEditBooking(null); }}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Edit Booking</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Select Date</label>
                <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-medium border-gray-300 shadow-sm transition hover:border-gray-500"
                    >
                      {editDate ? format(editDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarUI
                      mode="single"
                      selected={editDate}
                      onSelect={setEditDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Select Time Slot</label>
                <Select value={editTime} onValueChange={setEditTime}>
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
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="Enter your contact number"
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                  className="transition border-gray-300 shadow-sm hover:border-gray-500"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setEditBooking(null)}>
                Cancel
              </Button>
              <Button onClick={handleEditSave}>
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteConfirmation} onOpenChange={setShowDeleteConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Cancellation</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-gray-600">Are you sure you want to cancel this booking?</p>
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button 
              variant="outline" 
              onClick={() => {
                setShowDeleteConfirmation(false);
                setBookingToDelete(null);
              }}
            >
              No, Keep It
            </Button>
            <Button 
              variant="destructive"
              onClick={handleCancelBooking}
            >
              Yes, Cancel Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Bookings;