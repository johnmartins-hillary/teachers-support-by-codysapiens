// SummaryCard.js
import React from 'react';

const SummaryCard = ({ numFollowing, numFollowers }) => {
  return (
    <div className="bg-purple-500 text-white rounded-lg shadow-md p-4 mb-4">
      <p className="text-lg font-bold mb-2">Your Network Summary</p>
      <p className="text-lg mb-2">Following: {numFollowing}</p>
      <p className="text-lg mb-2">Followers: {numFollowers}</p>
    </div>
  );
};

export default SummaryCard;
