import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import RegisterImg from "../../../public/assets/smegx.jpg";
import Context from "../../Context/Context";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const academicYears = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
  "Graduate",
];

const departments = [
  "Computer Science",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Business Administration",
];

const Register = () => {
  const { setUser, createUser } = useContext(Context);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const navigate = useNavigate();

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const passwordsMatch = password === confirmPassword && password.length > 0;

  const onSubmit = (data) => {
    createUser(data.email, data.password);
    const newUser = {
      name: data.name,
      email: data.email,
      academicYear: data.academicYear,
      department: data.department,
      role: "user",
    };
    axios
      .post("http://localhost:7254/users", newUser)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your account has been created successfully",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate("/");
          });
        }
      })

      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });

    setUser(newUser);
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 p-6">
      <h1 className="text-3xl font-bold mb-8">Create Your Account</h1>

      <div className="flex flex-col md:flex-row bg-base-100 rounded-xl shadow-xl overflow-hidden max-w-5xl w-full">
        {/* Left Image */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${RegisterImg})`, minHeight: "450px" }}
        />

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/2 p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          noValidate
        >
          {/* Full width title */}
          <h2 className="md:col-span-2 text-2xl font-semibold mb-4 text-center">
            Register
          </h2>

          {/* Username */}
          <div className="form-control">
            <label className="label font-semibold" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Your username"
              className={`input input-bordered w-full ${
                errors.username ? "input-error" : ""
              }`}
              {...register("username", {
                required: "Username is required",
                minLength: { value: 3, message: "At least 3 characters" },
              })}
            />
            {errors.username && (
              <p className="text-error text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label font-semibold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className={`input input-bordered w-full ${
                errors.email ? "input-error" : ""
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label font-semibold" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPass ? "text" : "password"}
                placeholder="••••••••"
                className={`input input-bordered w-full ${
                  errors.password ? "input-error" : ""
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPass((v) => !v)}
                className="absolute text-xs top-1/2 right-3 -translate-y-1/2 text-gray-500 select-none"
                tabIndex={-1}
              >
                {showPass ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-error text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="form-control">
            <label className="label font-semibold" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPass ? "text" : "password"}
                placeholder="Re-enter password"
                className={`input input-bordered w-full ${
                  errors.confirmPassword ? "input-error" : ""
                }`}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPass((v) => !v)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 select-none text-xs"
                tabIndex={-1}
              >
                {showConfirmPass ? "Hide" : "Show"}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-error text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Academic Year */}
          <div className="form-control">
            <label className="label font-semibold" htmlFor="academicYear">
              Academic Year
            </label>
            <select
              id="academicYear"
              className={`input input-bordered w-full ${
                errors.academicYear ? "input-error" : ""
              }`}
              {...register("academicYear", {
                required: "Please select your academic year",
              })}
              defaultValue=""
            >
              <option value="" disabled>
                Select year
              </option>
              {academicYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            {errors.academicYear && (
              <p className="text-error text-sm mt-1">
                {errors.academicYear.message}
              </p>
            )}
          </div>

          {/* Department */}
          <div className="form-control">
            <label className="label font-semibold" htmlFor="department">
              Department
            </label>
            <select
              id="department"
              className={`input input-bordered w-full ${
                errors.department ? "input-error" : ""
              }`}
              {...register("department", {
                required: "Please select your department",
              })}
              defaultValue=""
            >
              <option value="" disabled>
                Select department
              </option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            {errors.department && (
              <p className="text-error text-sm mt-1">
                {errors.department.message}
              </p>
            )}
          </div>

          {/* Submit button spans both columns */}
          <button
            type="submit"
            disabled={!isValid || !passwordsMatch}
            title={
              !passwordsMatch
                ? "Passwords do not match"
                : !isValid
                ? "Fill all required fields"
                : ""
            }
            className="btn btn-primary w-full md:col-span-2 mt-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
