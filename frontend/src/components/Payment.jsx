/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { CreditCard, CalendarDays, LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router-dom";
import image from "../assets/image.jpeg";
import { toast } from "sonner";

export default function Payment({ name, date, time }) {
  const [loading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  const handlePayNow = () => {
    if (!cardNumber || !expiryDate || !cvv) {
      toast.warning("Please fill in all payment details.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Payment Saved!");
      navigate("/booking-success");
    }, 2000);
  };

  const handlePayLater = () => {
    navigate("/booking-success");
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen p-6"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-teal-400/80"></div>

      <Card className="relative z-10 w-full max-w-md overflow-hidden bg-white shadow-xl rounded-2xl">
        <CardHeader className="pb-4 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight text-gray-900">
            Payment Details
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Booking Summary */}
          <div className="space-y-1.5 text-center">
            <p className="text-base text-gray-700">{name}</p>
            <p className="text-base text-gray-700">
              {date ? date.toLocaleDateString() : ""}
            </p>
            <p className="text-base text-gray-700">{time}</p>
          </div>

          {/* Payment Form */}
          <form className="space-y-5">
            {/* Card Number */}
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Card Number
              </label>
              <div className="relative">
                <CreditCard className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
                <Input
                  type="text"
                  placeholder="•••• •••• •••• ••••"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="py-4 pl-10 pr-4 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Expiry Date */}
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <div className="relative">
                <CalendarDays className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
                <Input
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="py-4 pl-10 pr-4 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* CVV */}
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                CVV
              </label>
              <div className="relative">
                <LockKeyhole className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
                <Input
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="py-4 pl-10 pr-4 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </form>

          {/* Payment Action Buttons */}
          <div className="flex flex-col gap-4">
            <Button
              type="button"
              onClick={handlePayNow}
              disabled={loading}
              className="w-full transition-all hover:-translate-y-0.5"
            >
              {loading ? "Processing..." : "Pay Now"}
            </Button>
            <Button
              type="button"
              onClick={handlePayLater}
              className="w-full transition-all hover:-translate-y-0.5"
            >
              Pay Later
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
