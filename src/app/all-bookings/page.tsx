"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import BookingList from '@/components/BookingsList';
import Navbar from '@/components/Navbar';

export default function AllBookings() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const { data } = await axios.get('https://luminous-croquembouche-372467.netlify.app/api/bookings');
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-black mb-8">All Bookings</h1>
        <BookingList bookings={bookings} />
      </div>
    </div>
    </>
  );
}
