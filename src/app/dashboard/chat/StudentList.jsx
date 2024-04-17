import React, { useState } from 'react';

const StudentsList = ({ students, setSelectedStudent }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-1/4 border-r border-gray-300 p-4 h-full">
      <h2 className="text-lg font-bold mb-2">Students</h2>
      <input
        type="text"
        placeholder="Search students..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded-md px-2 py-1 w-full mb-4"
      />
      <ul className="overflow-y-auto max-h-screen">
        {filteredStudents.map(student => (
          <li key={student.id} className="cursor-pointer hover:bg-gray-200 p-2 rounded-md" onClick={() => setSelectedStudent(student)}>
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;
