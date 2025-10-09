import React from 'react';
import error from "../assets/App-Error.png"
import { useNavigate } from 'react-router';

const SearchErrorPage = () => {
    const navigate = useNavigate();
    return (
        
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
      <div className="max-w-md text-center">
        {/* Error Image */}
        <div className="flex justify-center mb-6">
          <img
            src={error}
            alt="404 Error"
            className=" animate-bounce-slow"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 text-gray-900">
          Oops! Page not found 😕
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-500 mb-8">
          The App you are requesting is not found on our system.  please try another apps
        </p>

        {/* Go Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          Go Back!
        </button>
      </div>
    </div>
    );
};

export default SearchErrorPage;