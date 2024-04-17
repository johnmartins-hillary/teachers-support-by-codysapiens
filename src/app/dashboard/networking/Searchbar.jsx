// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search teachers by name or field..."
        value={searchTerm}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
      />
    </div>
  );
};

export default SearchBar;
