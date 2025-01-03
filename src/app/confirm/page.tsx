"use client";

import { useRouter, useSearchParams } from "next/navigation"; // Importing hooks
import { Suspense } from "react";

export default function Confirm() {
  const router = useRouter();
  const searchParams = useSearchParams(); // Get query params

  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const guests = searchParams.get("guests");
  const name = searchParams.get("name");
  const contact = searchParams.get("contact");

  const handleGoToBookings = () => {
    router.push("/all-bookings"); // Navigate to /all-bookings
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-black text-center mb-6">Your Booking Confirmed</h2>
        <div className="space-y-4 text-gray-800">
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Guests:</strong> {guests}</p>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Contact:</strong> {contact}</p>
        </div>
        <div className="mt-6">
          <button
            onClick={handleGoToBookings}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition-colors"
          >
            Go to All Bookings
          </button>
        </div>
      </div>
    </div>
    </Suspense>
  );
}
