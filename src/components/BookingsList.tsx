export default function BookingList({ bookings }: any) {
    return (
      <div className="bg-white p-6 shadow-lg rounded-md mt-8">
        <h2 className="text-2xl font-bold text-center mb-6">Existing Bookings</h2>
        <ul className="space-y-4">
          {bookings.map((booking: any) => (
            <li
              key={booking._id}
              className="bg-gray-50 p-4 border border-gray-200 rounded-md shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-medium">{`${booking.date} - ${booking.time}`}</p>
                <p className="text-sm text-gray-600">{`${booking.name} - ${booking.guests} guests`}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  