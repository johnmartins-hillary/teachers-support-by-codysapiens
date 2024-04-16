import React from 'react';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  // Calculate the total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex">
      {pageNumbers.map((page) => (
        <li key={page} className={`mx-1 ${currentPage === page ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'} px-3 py-1 rounded-md cursor-pointer hover:bg- purple-500 hover:text-white`} onClick={() => onPageChange(page)}>
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
