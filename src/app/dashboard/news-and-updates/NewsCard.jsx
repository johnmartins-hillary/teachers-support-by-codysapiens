// NewsCard.js
import React from 'react';

const NewsCard = ({ title, description, author, link, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      {imageUrl && <img src={imageUrl} alt="News" className="w-full h-40 object-cover mb-2 rounded-md" />}
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-600 mb-2">Author: {author}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a>
    </div>
  );
};

export default NewsCard;
