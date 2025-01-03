// components/Navbar.tsx

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Restaurant Booking</Link>
        </div>
        <div className="space-x-4">
          <Link href="/add-booking" className="text-white hover:text-gray-200">
            Add Booking
          </Link>
          <Link href="/all-bookings" className="text-white hover:text-gray-200">
            All Bookings
          </Link>
        </div>
      </div>
    </nav>
  );
}
