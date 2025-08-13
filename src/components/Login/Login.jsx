import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import LoginImg from "../../../public/assets/smegx.jpg";
import Context from "../../Context/Context";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Login = () => {
  const { logInUser, setUser } = useContext(Context);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await logInUser(data.email, data.password);

      if (res?.user) {
        setUser(res.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/");
        });
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message || "Please check your email and password",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 p-4">
      <h1 className="text-3xl font-bold mb-6">Login to continue!</h1>

      <div className="flex flex-col md:flex-row bg-base-100 min-w-3xl mx-auto shadow-xl rounded-xl overflow-hidden">
        {/* Image Section */}
        <div
          className="w-full md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${LoginImg})`, minHeight: "300px" }}
        ></div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-1/2 p-6 space-y-4"
        >
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
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
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter your password"
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
              onClick={() => setShowPass(!showPass)}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 select-none text-xs"
              tabIndex={-1}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-error text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full bg-blue-500 border-none"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="divider">OR</div>

          {/* Social Login */}
          <div className="flex justify-center gap-3">
            <button className="btn btn-circle bg-blue-600 hover:bg-blue-700 text-white">
              <FaFacebookF size={18} />
            </button>
            <button className="btn btn-circle bg-gray-800 hover:bg-gray-900 text-white">
              <FaGithub size={18} />
            </button>
            <button className="btn btn-circle bg-red-600 hover:bg-red-700 text-white">
              <FaGoogle size={18} />
            </button>
          </div>

          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <a href="/register" className="text-primary hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
