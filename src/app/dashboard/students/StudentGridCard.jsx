import React from 'react';

const StudentCardGrid = ({ students }) => {
  // Calculate total, passing, average, and failing students
  const totalStudents = students.length;
  const passingStudents = students.filter(student => student.score >= 60).length;
  const failingStudents = students.filter(student => student.score < 60).length;
  const averageScore = students.reduce((acc, student) => acc + student.score, 0) / totalStudents;

  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-bold mb-2 text-gray-500">Total Students</h2>
        <p className="text-xl text-gray-500">{totalStudents}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow text-gray-500">
        <h2 className="text-lg font-bold mb-2">Passing Students</h2>
        <p className="text-xl">{passingStudents}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow text-gray-500">
        <h2 className="text-lg font-bold mb-2">Average Score</h2>
        <p className="text-xl">{averageScore.toFixed(2)}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow text-gray-500">
        <h2 className="text-lg font-bold mb-2">Failing Students</h2>
        <p className="text-xl">{failingStudents}</p>
      </div>
    </div>
  );
};

export default StudentCardGrid;
