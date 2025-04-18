import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-pink-50 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
         
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
           
            <img
              src="./Images/GlowNest Hub.png"
              className="h-8"
              alt="GlowNest Hub Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-pink-700 dark:text-pink-300">
              GlowNest Hub
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-6">
           
            <ul className="flex space-x-6 font-medium">
              <li>
                <a
                  href="#"
                  className="text-pink-700 hover:text-pink-900 dark:text-pink-300 dark:hover:text-pink-200"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-700 dark:text-gray-300 dark:hover:text-pink-300"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-700 dark:text-gray-300 dark:hover:text-pink-300"
                >
                  Submit
                </a>
              </li>
            </ul>

           
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-pink-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-pink-200 rounded-full bg-white focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-pink-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search styles..."
              />
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
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-pink-500"
                  aria-hidden="true"
              
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar-mobile"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-pink-200 rounded-full bg-white focus:ring-pink-500 focus:border-pink-500"
                placeholder="Search styles..."
              />
            </div>
            <ul className="flex flex-col p-4 font-medium border border-pink-100 rounded-lg bg-white ">
              <li className="mb-2">
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-pink-600 rounded-md "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-md hover:bg-pink-100 "
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-md hover:bg-pink-100 "
                >
                  Submit
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;