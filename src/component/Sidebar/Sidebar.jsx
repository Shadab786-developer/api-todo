import React, { useState } from "react";

const Sidebar = () => {
  return (
    <div className="bg-white shadow-md p-4">
      {/* Navbar */}
      <div className="flex justify-between items-center">
        {/* Sidebar Toggle Icon */}

        {/* Logo / Title */}
        <div className="flex items-center space-x-2">
          <div className="text-xl font-semibold text-green-500">DoIt</div>
        </div>

        {/* Navbar Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="16.9" y1="16.9" x2="22" y2="22"></line>
          </svg>
          <button className="text-gray-500"></button>

          {/* Other Icons (bell, settings) */}
          <div className="flex items-center space-x-2">
            <button className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <button className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000000"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
            <button className="text-gray-500">
              <span class="material-symbols-outlined">moon_stars</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
    </div>
  );
};

export default Sidebar;
