import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Make sure it's 'react-router-dom'
import Context from "../../Context/Context";
import logo from "../../../public/assets/cpc logo high rezolution.png";

const Navbar = () => {
  const { user, logOutUser, currUser } = useContext(Context);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollThreshold = window.innerHeight * 0.1; // 10% of window height

      if (currentScroll < scrollThreshold) {
        // Show navbar if scroll is less than 10%
        setShowNavbar(true);
      } else if (currentScroll > lastScroll) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed z-50 top-0 left-0 w-full flex items-center justify-center p-4 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="px-2 w-[60%] rounded-lg bg-sky-200/40 backdrop-blur-lg text-black flex items-center justify-between">
        <img src={logo} className="h-15" alt="logo" />
        <ul className="flex items-center justify-center space-x-4">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink to={"/announcement"}>Announcement</NavLink>
          </li>
          {currUser?.role && (
            <li>
              <NavLink to={`/dashboard/${currUser.role}`}>Dashboard</NavLink>
            </li>
          )}
        </ul>
        {user ? (
          <button
            onClick={logOutUser}
            className="bg-blue-400 text-white p-2 rounded-md"
          >
            Logout
          </button>
        ) : (
          <div className="flex items-center space-x-4">
            <button className="bg-blue-400 text-white p-2 rounded-md">
              <NavLink to={"/login"}>Login</NavLink>
            </button>
            <button className="bg-blue-400 text-white p-2 rounded-md">
              <NavLink to={"/register"}>Register</NavLink>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
