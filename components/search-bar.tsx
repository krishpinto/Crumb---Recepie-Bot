"use client";

import React from "react";

interface SearchBarProps {
  value: string; // The current value of the input field
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle input changes
  onSearch: () => void; // Function to handle the search action
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        value={value} // Controlled input
        onChange={onChange} // Handle input changes
        placeholder="Search for recipes..."
        className="w-full px-4 py-2 border rounded text-orange-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button
        onClick={onSearch}
        className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
