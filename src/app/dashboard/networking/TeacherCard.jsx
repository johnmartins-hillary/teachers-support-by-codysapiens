// TeacherCard.js
import React from 'react';

const TeacherCard = ({ teacher, handleFollow, handleModal }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-bold mb-2">{teacher.name}</h3>
      <p className="text-gray-600 mb-2">Course: {teacher.course}</p>
      <p className="text-gray-600 mb-2">Location: {teacher.location}</p>
      <p className="text-gray-600 mb-2">Students: {teacher.numStudents}</p>
      <p className="text-gray-600 mb-2">Followers: {teacher.numFollowers}</p>
      <p className="text-gray-600 mb-2">Following: {teacher.numFollowing}</p>
      <button onClick={() => handleFollow(teacher.id)} className="bg-purple-500 text-white px-4 py-2 rounded-md mr-2">Follow</button>
      <button onClick={() => handleModal(teacher)} className="bg-purple-500 text-white px-4 py-2 rounded-md">Message</button>
    </div>
  );
};

export default TeacherCard;
