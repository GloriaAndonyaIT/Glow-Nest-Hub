import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-pink-100 text-pink-900 rounded-t-2xl shadow-inner mt-10">
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-10">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-6 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="./Images/GlowNest logo.jpg"
              className="h-8"
              alt="GlowNest Logo"
            />
            <span className="self-center text-2xl font-bold text-pink-700 whitespace-nowrap">
              GlowNest Hub
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-pink-600 sm:mb-0">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">Home</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:underline me-4 md:me-6">Gallery</Link>
            </li>
            <li>
              <Link to="/submit" className="hover:underline me-4 md:me-6">Submit</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-pink-300 sm:mx-auto" />
        <span className="block text-sm text-pink-600 text-center">
           © 2025 GlowNest Hub 💕 
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
