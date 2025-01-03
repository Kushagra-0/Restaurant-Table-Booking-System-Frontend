import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-black mb-6">Restaurant Table Booking</h1>
        <p className="text-lg text-gray-600 text-center mb-6">Select a page to get started</p>
        <div className="flex justify-center space-x-4">
          <Link href="/add-booking">
            <div className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-900 transition-colors">
              Add Booking
            </div>
          </Link>
          <Link href="/all-bookings">
            <div className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition-colors">
              View Bookings
            </div>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
