import React from "react";

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-gray-300 shadow-gray-600 shadow-sm fixed w-full">
      <div className="container mx-auto flex flex-wrap justify-between px-5 py-3 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center mb-2 md:mb-0">
          <span className="ml-3 text-2xl text-gray-900">Your-Trello-Board</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
