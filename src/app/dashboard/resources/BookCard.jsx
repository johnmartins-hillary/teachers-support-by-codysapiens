import React from 'react';

const BookCard = ({ image, title, author, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="mb-4">
        <img src={image} alt={title} className="h-48 w-full object-cover rounded-md" />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">{author}</p>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
