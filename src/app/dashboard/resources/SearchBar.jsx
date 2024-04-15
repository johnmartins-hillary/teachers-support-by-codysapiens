import React, { useState } from 'react';
import Input from "../../Components/Form/Input";


const SearchBar = ({ placeholder, options, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // Call the onSearch function with the search term
    onSearch(e.target.value);
  };

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder={placeholder}
        // className="border border-gray-300 rounded-md px-4 py-2 w-full"
        value={searchTerm}
        onChange={handleChange}
      />
      {options.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 w-full">
          {options.map((option, index) => (
            <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100">{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
