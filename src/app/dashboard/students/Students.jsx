"use client"

import React, { useState, useEffect } from "react";
import StudentTable from "./StudentTable";
import Pagination from "./Pagination";
import PageWrapper from './../../Components/Reusables/Wrapers/PageWrappper';
import StudentCardGrid from "./StudentGridCard"


const StudentsPage = () => {
  // Hardcoded student data for demonstration
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      age: 25,
      gender: "Male",
      location: "New York",
      score: 85,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      age: 22,
      gender: "Female",
      location: "Los Angeles",
      score: 78,
    },
    // Add more student data here...
  ]);

  // Function to generate random student data
  const generateRandomStudent = (id) => {
    const firstNames = [
      "John",
      "Jane",
      "Michael",
      "Emily",
      "David",
      "Sarah",
      "Matthew",
      "Olivia",
      "Christopher",
      "Sophia",
    ];
    const lastNames = [
      "Doe",
      "Smith",
      "Johnson",
      "Brown",
      "Williams",
      "Jones",
      "Garcia",
      "Miller",
      "Davis",
      "Martinez",
    ];
    const genders = ["Male", "Female"];
    const locations = [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose",
    ];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const gender = genders[Math.floor(Math.random() * genders.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const age = Math.floor(Math.random() * 10) + 18; // Random age between 18 and 27
    const score = Math.floor(Math.random() * 51) + 50; // Random score between 50 and 100
    return {
      id,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
      age,
      gender,
      location,
      score,
    };
  };

  useEffect(() =>{  for (let i = 3; i <= 32; i++) {
    setStudents((prevStudents) => [...prevStudents, generateRandomStudent(i)]);
  }},[])
  // Generate 30 random students


  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10; // Number of students per page
  const totalStudents = students.length;
  const totalPages = Math.ceil(totalStudents / studentsPerPage);
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const displayedStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <PageWrapper>
    <div className="container mx-auto my-8 px-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-500">Students</h1>
      {/* Section of cards showing total, passing, average, and failing students */}
      <StudentCardGrid students={students} />

      {/* Table with sorting options and filter */}
      <StudentTable students={displayedStudents} />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div></PageWrapper>
  );
};

export default StudentsPage;
