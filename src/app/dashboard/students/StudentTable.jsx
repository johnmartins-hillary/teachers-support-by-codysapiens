import React, { useState } from "react";

const StudentTable = ({ students }) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSort = (key) => {
    if (sortBy === key) {
      // If already sorted by the same key, toggle the sort order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // If sorting by a different key, set the new key and default to ascending order
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Sorting function based on key and order
  const sortedStudents = students.sort((a, b) => {
    if (sortBy && sortOrder === "asc") {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else if (sortBy && sortOrder === "desc") {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    } else {
      return 0;
    }
  });

  // Filtering function based on search term
  const filteredStudents = searchTerm
    ? sortedStudents.filter((student) =>
        Object.values(student).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : sortedStudents;

  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-100 px-4 py-3">
        {/* Search bar */}
        <div className="mb-4 sm:mb-0">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search students..."
            className="text-gray-400 block w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {/* Sorting options */}
        <div className="text-gray-500">
          <span className="mr-2">Sort by:</span>
          <button
            className={`px-2 py-1 ${sortBy === "name" ? "font-bold" : ""}`}
            onClick={() => handleSort("name")}
          >
            Name
          </button>
          <button
            className={`px-2 py-1 ${sortBy === "email" ? "font-bold" : ""}`}
            onClick={() => handleSort("email")}
          >
            Email
          </button>
          <button
            className={`px-2 py-1 ${sortBy === "score" ? "font-bold" : ""}`}
            onClick={() => handleSort("score")}
          >
            Score
          </button>
          {/* Add more sorting options here if needed */}
        </div>
      </div>
      <table className="min-w-full text-gray-500">
        {/* Table headers */}
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-md leading-4 font-medium text-gray-700 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-md leading-4 font-medium text-gray-700 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-md leading-4 font-medium text-gray-700 uppercase tracking-wider">
              Age
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-md leading-4 font-medium text-gray-700 uppercase tracking-wider">
              Gender
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-md leading-4 font-medium text-gray-700 uppercase tracking-wider">
              Location
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-md leading-4 font-medium text-gray-700 uppercase tracking-wider">
              Score
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {student.name}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {student.email}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {student.age}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {student.gender}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {student.location}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {student.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
