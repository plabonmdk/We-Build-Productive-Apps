import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-200 max-w-[2000px] mx-auto text-base-content border-t border-gray-300 mt-10">
      <div className="max-w-[2000px] mx-auto px-6 py-10">
        {/* Top Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-5 text-sm font-medium">
            <a className="link link-hover hover:text-primary transition">About</a>
            <a className="link link-hover hover:text-primary transition">Projects</a>
            <a className="link link-hover hover:text-primary transition">Contact</a>
            <a className="link link-hover hover:text-primary transition">Blog</a>
          </nav>

          {/* Social Links */}
          <div className="flex gap-5">
            {/* Twitter */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 2c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 2c-2.732 0-4.948 2.216-4.948 4.948 0 .39.045.765.127 1.124C7.728 7.896 4.1 5.905 1.671 2.926a4.93 4.93 0 0 0-.666 2.484c0 1.71.87 3.216 2.188 4.099a4.92 4.92 0 0 1-2.24-.618v.06c0 2.386 1.697 4.374 3.946 4.828a4.93 4.93 0 0 1-2.224.084c.626 1.956 2.444 3.379 4.6 3.419A9.874 9.874 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.213-.004-.425-.013-.636A10.013 10.013 0 0 0 24 4.557z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/plabonmdk/We-Build-Productive-Apps.git"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .297a12 12 0 0 0-3.793 23.4c.6.111.793-.261.793-.579v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.729.083-.729 1.205.085 1.839 1.238 1.839 1.238 1.07 1.834 2.809 1.304 3.494.997.108-.776.419-1.304.762-1.604-2.665-.305-5.466-1.333-5.466-5.931 0-1.311.469-2.382 1.237-3.223-.123-.304-.536-1.528.117-3.183 0 0 1.008-.322 3.3 1.23A11.47 11.47 0 0 1 12 6.844c1.02.005 2.047.138 3.006.405 2.289-1.553 3.295-1.23 3.295-1.23.655 1.655.242 2.879.119 3.183.77.841 1.236 1.912 1.236 3.223 0 4.61-2.804 5.624-5.476 5.921.43.372.823 1.104.823 2.224v3.293c0 .322.192.694.8.576A12.002 12.002 0 0 0 12 .297z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-6"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} — Designed & Developed by{" "}
            <span className="font-semibold text-primary">
              PLABON CHANDRO MODAK
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;