import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Function to generate an array of page numbers
  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  // Function to handle page change
  const handleClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm leading-5 text-gray-700">
            Showing {currentPage === 1 ? 1 : (currentPage - 1) * 10 + 1} to {currentPage === totalPages ? totalPages * 10 : currentPage * 10} of {totalPages * 10} results
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-between sm:hidden">
        {/* Previous Page button */}
        <button
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
          className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:text-gray-500'}`}
        >
          Previous
        </button>
        {/* Next Page button */}
        <button
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:text-gray-500'}`}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          {/* Page navigation buttons */}
          <nav className="relative z-0 inline-flex shadow-sm">
            {generatePageNumbers().map(page => (
              <button
                key={page}
                onClick={() => handleClick(page)}
                className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium ${currentPage === page ? 'text-indigo-500 bg-indigo-100' : 'text-gray-700 hover:text-gray-500 hover:bg-gray-100'} focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
