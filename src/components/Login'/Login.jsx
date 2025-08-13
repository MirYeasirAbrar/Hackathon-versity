import React from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import LoginImg from "../../../public/assets/smegx.jpg";

const Login = () => {
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
        <form className="w-full md:w-1/2 p-6 space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          <button type="submit" className="btn btn-primary bg-blue-500 border-none w-full">
            Login
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