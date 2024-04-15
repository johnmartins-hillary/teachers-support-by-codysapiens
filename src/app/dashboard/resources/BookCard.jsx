import React from 'react';

const BookCard = ({ image, title, author, description }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 bg-white shadow-lg w-full">
      <img src={image} alt={title} className="mb-4 w-full h-50" />
      <h3 className="text-lg font-semibold mb-2 text-gray-600">{title}</h3>
      <p className="text-sm text-gray-600 mb-2 text-red-500">{author}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default BookCard;
