import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Navbar({ onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-pink-50 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
         
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="./Images/GlowNestHub.png"
              className="h-8"
              alt="GlowNest Hub Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-pink-700">
              GlowNest Hub
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
           
            <ul className="flex space-x-6 font-medium">
              <li>
                <Link
                  to="/"
                  className="text-pink-700 hover:text-pink-900"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-600 hover:text-pink-700"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/submit"
                  className="text-gray-600 hover:text-pink-700"
                >
                  Share your style
                </Link>
              </li>
            </ul>
           
            <div className="relative">
              <SearchBar onSearch={onSearch} />
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-pink-500 rounded-lg hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200 dark:text-pink-400 dark:hover:bg-gray-700 dark:focus:ring-pink-600"
              aria-controls="navbar-search"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:hidden mt-4`}
            id="navbar-search"
          >
            <div className="relative mb-4">
              <SearchBar onSearch={onSearch} />
            </div>
            <ul className="flex flex-col p-4 font-medium border border-pink-100 rounded-lg bg-white">
              <li className="mb-2">
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-pink-600 rounded-md"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/gallery"
                  className="block py-2 px-3 text-gray-900 rounded-md hover:bg-pink-100"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/submit"
                  className="block py-2 px-3 text-gray-900 rounded-md hover:bg-pink-100"
                >
                  Submit
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;