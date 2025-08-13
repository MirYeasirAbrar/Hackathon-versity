import axios from "axios";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Context from "../Context/Context";

export default function EventRegistration() {
  const { currUser } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  if (!event) {
    return (
      <div className="max-w-lg min-h-screen mt-12 mx-auto p-6">
        <h2 className="text-xl font-bold text-red-600 mb-4">
          No event selected!
        </h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  const onSubmit = async (data) => {
    try {
      // Combine form data with event details
      const payload = {
        ...data,
        eventId: event.id,
        eventTitle: event.title,
        eventDate: event.date,
        eventTime: event.time,
        eventLocation: event.location,
      };

      const email = currUser?.email;
      if (!email) {
        alert("You must be logged in to register!");
        return;
      }

      await axios.post(
        `http://localhost:7254/eventsRegistration/${email}`,
        payload
      );
      alert("Registration successful!");
      reset();
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to submit registration. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Event Registration
      </h2>

      {/* Event Details */}
      <div className="mb-6 bg-gray-100 p-4 rounded-lg">
        <p>
          <strong>Title:</strong> {event.title}
        </p>
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p>
          <strong>Time:</strong> {event.time}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
      </div>

      {/* Registration Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          {...register("fullName", { required: "Full name is required" })}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          defaultValue={currUser?.email || ""}
          readOnly
          {...register("email", { required: "Email is required" })}
        />

        <input
          type="text"
          placeholder="Department"
          className="w-full border p-2 rounded"
          {...register("department", { required: "Department is required" })}
        />
        {errors.department && (
          <p className="text-red-500 text-sm">{errors.department.message}</p>
        )}

        <input
          type="text"
          placeholder="Batch"
          className="w-full border p-2 rounded"
          {...register("batch", { required: "Batch is required" })}
        />
        {errors.batch && (
          <p className="text-red-500 text-sm">{errors.batch.message}</p>
        )}

        <input
          type="text"
          placeholder="Semester"
          className="w-full border p-2 rounded"
          {...register("semester", { required: "Semester is required" })}
        />
        {errors.semester && (
          <p className="text-red-500 text-sm">{errors.semester.message}</p>
        )}

        <input
          type="text"
          placeholder="CPC ID"
          className="w-full border p-2 rounded"
          {...register("cpcId", { required: "CPC ID is required" })}
        />
        {errors.cpcId && (
          <p className="text-red-500 text-sm">{errors.cpcId.message}</p>
        )}

        <textarea
          placeholder="Comments (optional)"
          className="w-full border p-2 rounded"
          rows="3"
          {...register("comments")}
        ></textarea>

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
