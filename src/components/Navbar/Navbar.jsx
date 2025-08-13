import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center bg-white h-15 shadow-md">
      <div className="px-12 w-full text-black flex items-center justify-between">
        <h1>DIU CPC</h1>
        <ul className="flex items-center justify-center space-x-4">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact Us</NavLink>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-400 text-white p-2 rounded-md">
            <NavLink to={"/login"}>Login</NavLink>
          </button>
          <button className="bg-blue-400 text-white p-2 rounded-md">
            <NavLink to={"/register"}>Register</NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
