import Form from "@/components/Form";

export default function AddBooking() {
  return (
    <>
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-black mb-8">Add Booking</h1>
        <Form />
      </div>
    </div>
    </>
  );
}
