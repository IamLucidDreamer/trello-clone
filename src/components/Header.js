import React from "react";

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-gray-300 shadow-gray-600 shadow-sm fixed w-full">
      <div className="container mx-auto flex flex-wrap justify-between px-5 py-3 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center mb-2 md:mb-0">
          <span className="ml-3 text-2xl text-gray-900">Your-Trello-Board</span>
        </div>
        <button className="font-bold inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0 text-white transition duration-300">
          Login
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
