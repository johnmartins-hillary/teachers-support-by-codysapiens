import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className="flex justify-center space-x-4 mt-4">
      {[...Array(totalPages)]?.map((_, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
