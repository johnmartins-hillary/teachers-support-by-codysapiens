"use client";

import React, { useState } from "react";
import PageWrapper from "../../Components/Reusables/Wrapers/PageWrappper";

// Sample data for teachers
const initialTeachers = [
  {
    id: 1,
    name: "John Doe",
    subject: "Mathematics",
    school: "High School A",
    location: "New York",
  },
  {
    id: 2,
    name: "Jane Smith",
    subject: "Science",
    school: "Middle School B",
    location: "Los Angeles",
  },
  // Add more teachers as needed
];

const TeachersNetworkingPage = () => {
  const [teachers, setTeachers] = useState(initialTeachers);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter teachers by name, subject, school, or location
  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageWrapper>
      <div className="container mx-auto mt-8 px-8 overflow-y-auto h-full">
        <h1 className="text-3xl font-bold mb-4">Teachers Networking</h1>
        {/* Search/filter input */}
        <input
          type="text"
          placeholder="Search by name, subject, school, or location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mb-4"
        />
        {/* List of teachers */}
        <div>
          {filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              className="border border-gray-300 rounded-lg p-4 mb-4"
            >
              <h2 className="text-lg font-semibold">{teacher.name}</h2>
              <p className="text-sm text-gray-600">
                {teacher.subject} - {teacher.school} - {teacher.location}
              </p>
              {/* Add buttons for connecting, messaging, etc. */}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default TeachersNetworkingPage;
