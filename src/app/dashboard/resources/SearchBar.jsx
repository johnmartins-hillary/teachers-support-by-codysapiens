import React, { useState } from 'react';
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";


const SearchBar = ({ placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  }

  return (
    <div className="w-full relative flex items-center gap-2">
      <Input
        type="text"
        placeholder={placeholder}
        className=" w-full"
        value={searchTerm}
        onChangeHandler={handleChange}
      />
      {/* {options.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 w-full">
          {options.map((option, index) => (
            <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100">{option}</li>
          ))}
        </ul>
      )} */}
      <Button btnText="Search" onClickHandler={handleSearch} customClassName="mt-2"/>
    </div>
  );
};

export default SearchBar;
