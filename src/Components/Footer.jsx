import React from 'react';
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png"
const Footer = () => {
  return (
  
    <footer className="bg-base-300 text-base-content py-12 border-t border-gray-300">
      <div className="max-w-[2200px]  text-center mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        
        {/* Brand / About */}
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <img className="w-10" src={logo} alt="Hero.IO Logo" />
            <h6 className="footer-title text-lg font-semibold mb-3">HERO.IO</h6>
          </div>
          <p className="text-gray-700 text-justify sm:text-left mt-2">
            <span className="font-semibold">Hero Apps</span> serves as your comprehensive platform 
            to find, download, and experience top mobile applications. We provide secure, current, 
            and popular apps for both Android and iOS — everything conveniently located in one spot. 
            Uncover smarter applications, more quickly.
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h6 className="footer-title text-lg font-semibold mb-3">Company</h6>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="/about" className="link link-hover hover:text-blue-600 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="link link-hover hover:text-blue-600 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="/jobs" className="link link-hover hover:text-blue-600 transition-colors">
                Jobs
              </a>
            </li>
            <li>
              <a href="/press-kit" className="link link-hover hover:text-blue-600 transition-colors">
                Press Kit
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className='flex flex-col items-center text-center'>
          <h6 className="footer-title text-lg font-semibold mb-3">Connect With Me</h6>
          <div className="flex justify-center  sm:justify-start space-x-5 mt-2">
            <a
              href="https://www.facebook.com/plabon.plabon.549675/likes"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://x.com/plabon90046/likes"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-500 transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/plabon-chandro-modak-411543383/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/plabonmdk/We-Build-Productive-Apps"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-800 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-400 pt-6 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">PLABON CHANDRO MODAK</span>. All rights reserved.
        </p>
      </div>
    </footer>

  );
};

export default Footer;