import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content py-12 border-t border-gray-300">
      {/* Footer Grid */}
      <div className="max-w-[1900px] mx-auto px-6 sm:px-10 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* ---- Left Section ---- */}
        <div className="text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start gap-3">
            <img className="w-12" src={logo} alt="Hero.IO Logo" />
            <h6 className="text-xl font-bold text-gray-800 mt-2 sm:mt-0">
              HERO.IO
            </h6>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            <span className="font-semibold">Hero Apps</span> serves as your
            comprehensive platform to find, download, and experience top mobile
            applications. We provide secure, current, and popular apps for both
            Android and iOS — everything conveniently located in one spot.
          </p>
        </div>

        {/* ---- Middle Section ---- */}
        <div className="text-center sm:text-left">
          <h6 className="text-xl font-semibold mb-4 text-gray-800">Company</h6>
          <ul className="space-y-3 text-gray-700">
            <li>
              <a
                href="/about"
                className="hover:text-blue-600 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="/jobs" className="hover:text-blue-600 transition-colors">
                Jobs
              </a>
            </li>
            <li>
              <a
                href="/press-kit"
                className="hover:text-blue-600 transition-colors"
              >
                Press Kit
              </a>
            </li>
          </ul>
        </div>

        {/* ---- Right Section ---- */}
        <div className="text-center">
          <h6 className="text-xl font-semibold mb-4 text-gray-800">
            Connect With Me
          </h6>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/plabon.plabon.549675/likes"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebook size={26} />
            </a>
            <a
              href="https://x.com/plabon90046/likes"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-500 transition-colors duration-300"
            >
              <FaTwitter size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/plabon-chandro-modak-411543383/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="https://github.com/plabonmdk/We-Build-Productive-Apps"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-800 transition-colors duration-300"
            >
              <FaGithub size={26} />
            </a>
          </div>
        </div>
      </div>

      {/* ---- Bottom Border ---- */}
      <div className="mt-10 border-t border-gray-400 pt-6 text-center px-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">PLABON CHANDRO MODAK</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
