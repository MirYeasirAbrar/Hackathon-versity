import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EventRegistration() {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;

  if (!event) {
    return (
      <div className="max-w-lg mx-auto p-6">
        <h2 className="text-xl font-bold text-red-600 mb-4">No event selected!</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration submitted!");
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Registration</h2>

      {/* Event Details */}
      <div className="mb-6 bg-gray-100 p-4 rounded-lg">
        <p><strong>Title:</strong> {event.title}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Location:</strong> {event.location}</p>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" required />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" required />
        <input type="text" placeholder="Department" className="w-full border p-2 rounded" required />
        <input type="text" placeholder="Batch" className="w-full border p-2 rounded" required />
        <input type="text" placeholder="Semester" className="w-full border p-2 rounded" required />
        <input type="text" placeholder="CPC ID" className="w-full border p-2 rounded" required />
        <textarea placeholder="Comments (optional)" className="w-full border p-2 rounded" rows="3"></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
}
