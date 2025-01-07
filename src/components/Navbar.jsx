import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-[#FFF7E2]">
      <div className="navbar max-w-6xl mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Toggle Navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-md font-bold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/doctors"
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                >
                  Find Doctor
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/consult"
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                >
                  Consult
                </NavLink>
              </li>
            </ul>
          </div>
          <a href="#" className="text-2xl font-bold">
            AMRUTAM
          </a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Find Doctor
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/consult"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
              >
                Consult
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex gap-2">
          <a
            href="#"
            className="border border-[#3A643B] text-gray-700 px-2 py-2 sm:px-3 sm:py-2 text-xs sm:text-sm rounded-md hover:bg-[#3A643B] hover:text-white hover:border-[#3A643B] transition"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-[#3A643B] text-white px-2 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-md hover:bg-green-700 transition"
          >
            Sign-up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
