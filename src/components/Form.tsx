"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Import useRouter

export default function Form({ fetchBookings, setMessage }: any) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    contact: "",
  });

  const router = useRouter(); // Initialize the router

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://luminous-croquembouche-372467.netlify.app/api/bookings",
        formData
      );

      // Construct the query string
      const queryString = new URLSearchParams(formData).toString();

      // Redirect to the confirmation page with query string
      router.push(`/confirm?${queryString}`);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Make a Booking</h1>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4"
          required
        />
        <input
          type="time"
          name="time"
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4"
          required
        />
        <input
          type="number"
          name="guests"
          placeholder="Guests"
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4"
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-6"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
        >
          Book Now
        </button>
      </div>
    </form>
  );
}
