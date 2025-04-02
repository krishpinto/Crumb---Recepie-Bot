"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-100 text-orange-700 py-4 border-t border-orange-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Side: Made by Krish */}
        <p className="text-sm font-medium">Made by Krish</p>

        {/* Right Side: GitHub and LinkedIn Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/krishpinto"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.46.12-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.64 1.59.24 2.76.12 3.05.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.24 5.7.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A10.5 10.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/krish-pinto-982ab41ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.34 19H5.33V9h3.01v10zM6.83 7.5c-.97 0-1.75-.78-1.75-1.75S5.86 4 6.83 4s1.75.78 1.75 1.75S7.8 7.5 6.83 7.5zM19 19h-3.01v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V19h-3.01V9h2.89v1.37h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.58V19z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;