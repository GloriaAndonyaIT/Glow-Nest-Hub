import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      navigate('/gallery');
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="relative flex items-center">
      <div className="relative flex-grow">
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
          <span className="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-pink-200 rounded-l-full bg-white focus:ring-pink-500 focus:border-pink-500"
          placeholder="Find your next slay…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <button 
        type="submit" 
        className="px-4 py-2 bg-pink-500 text-white rounded-r-full hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;