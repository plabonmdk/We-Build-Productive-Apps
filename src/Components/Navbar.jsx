import React from "react";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import naveLogo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="max-w-[2000px] mx-auto">
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu gap-3 menu-sm dropdown-content text-2xl bg-base-100 rounded-box  mt-1  p-1 shadow"
            >
              <li className="hover:text-[#632EE3]">
                {" "}
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:text-[#632EE3]">
                {" "}
                <NavLink to="/Apps">Apps</NavLink>
              </li>
              <li className="hover:text-[#632EE3]">
                {" "}
                <NavLink to="/">Installation</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center ">
            <img className="h-[50px] w-[50px]" src={naveLogo} alt="" />
            <Link to="/" className="btn btn-ghost text-[#632EE3] text-xl">
              HERO.IO
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl gap-10 ">
            <li className="hover:text-[#632EE3]">
              {" "}
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-[#632EE3]">
              {" "}
              <NavLink to="/Apps">Apps</NavLink>
            </li>
            <li className="hover:text-[#632EE3]">
              {" "}
              <NavLink to="/">Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <FaGithub />
            Contribute
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
