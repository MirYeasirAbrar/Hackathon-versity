import React, { useState, useRef } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import RegisterImg from "../../../public/assets/smegx.jpg";

const Register = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [showPass, setShowPass] = useState(false);

  // Controlled select states:
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");

  const togglePass = () => {
    setShowPass(!showPass);
  };

  const captchaRef = useRef();

  const handleCaptchaVerify = (token) => {
    setCaptchaValue(token);
    console.log("hCaptcha token:", token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please verify the captcha!");
      return;
    }
    // Proceed with form submission
    console.log("Form submitted with hCaptcha token:", captchaValue);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 p-4">
      <h1 className="text-3xl font-bold mb-6">Create Your Account</h1>

      <div className="flex flex-col md:flex-row max-w-5xl w-full bg-base-100 shadow-xl rounded-xl overflow-hidden">
        {/* Image Section */}
        <div
          className="w-full md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${RegisterImg})`, minHeight: "300px" }}
        ></div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered input-primary w-full"
                required
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered input-primary w-full"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="tel"
                placeholder="+880 1XXX-XXXXXX"
                className="input input-bordered input-primary w-full"
                required
              />
            </div>

            {/* Department */}
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Department</span>
              </label>
              <select
                className="select select-bordered select-primary w-full"
                required
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="" disabled>
                  Select department
                </option>
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="BBA">BBA</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Academic Year */}
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Academic Year</span>
              </label>
              <select
                className="select select-bordered select-primary w-full"
                required
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="" disabled>
                  Select year
                </option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Password</span>
              </label>
              <div className="relative w-full">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••"
                  className="input input-bordered input-primary w-full"
                  required
                />
                <span
                  onClick={togglePass}
                  className="absolute text-gray-400 top-1/2 right-3 transform -translate-y-1/2 cursor-pointer select-none"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-control md:col-span-2">
              <label className="label font-semibold">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Re-enter your password"
                className="input input-bordered input-primary w-full"
                required
              />
            </div>
          </div>

          {/* hCaptcha */}
          <div className="flex justify-center">
            <HCaptcha
              sitekey="ES_0201d510206b4e599edf1de3debd6633"
              onVerify={handleCaptchaVerify}
              ref={captchaRef}
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={!captchaValue}
            title={!captchaValue ? "Complete the captcha to register" : ""}
          >
            Register
          </button>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Social Signup */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="btn btn-circle bg-blue-600 hover:bg-blue-700 text-white"
            >
              <FaFacebookF size={18} />
            </button>
            <button
              type="button"
              className="btn btn-circle bg-gray-800 hover:bg-gray-900 text-white"
            >
              <FaGithub size={18} />
            </button>
            <button
              type="button"
              className="btn btn-circle bg-red-600 hover:bg-red-700 text-white"
            >
              <FaGoogle size={18} />
            </button>
          </div>

          {/* Already have an account */}
          <p className="text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-primary hover:underline">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
