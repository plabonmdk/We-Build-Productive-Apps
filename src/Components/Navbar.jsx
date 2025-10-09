import React from "react";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import naveLogo from "../assets/logo.png";

const Navbar = () => {
  return (
   <div>
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8">
      <div className=" max-w-[2300px] mx-auto navbar bg-base-100  px-4 lg:px-8">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-8 6h8"
                />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 text-lg"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[#632EE3] font-semibold" : "hover:text-[#632EE3]"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Apps"
                  className={({ isActive }) =>
                    isActive ? "text-[#632EE3] font-semibold" : "hover:text-[#632EE3]"
                  }
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/installation"
                  className={({ isActive }) =>
                    isActive ? "text-[#632EE3] font-semibold" : "hover:text-[#632EE3]"
                  }
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Logo Section */}
          <Link to="/" className="flex items-center ml-7 gap-3">
            <img
              src={naveLogo}
              alt="HERO.IO Logo"
              className="h-[48px] w-[48px] object-contain"
            />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#632EE3] font-semibold" : "hover:text-[#632EE3]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Apps"
                className={({ isActive }) =>
                  isActive ? "text-[#632EE3] font-semibold" : "hover:text-[#632EE3]"
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive ? "text-[#632EE3] font-semibold" : "hover:text-[#632EE3]"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end mr-10">
          <a
            href="https://github.com/plabonmdk/We-Build-Productive-Apps.git"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-all hover:shadow-lg hover:scale-105"
          >
            <FaGithub size={18} />
            Contribute
          </a>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Navbar;
