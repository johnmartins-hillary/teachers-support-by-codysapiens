"use client"

import React, { useState } from "react";
import PageWrapper from "../../Components/Reusables/Wrapers/PageWrappper";

// Sample data for job listings
const initialJobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Company A",
    location: "New York",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Web Developer",
    company: "Web Agency B",
    location: "San Francisco",
    type: "Contract",
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Data Company C",
    location: "Chicago",
    type: "Part-time",
  },
  // Add more job listings as needed
];

const JobSearchBoard = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Search/filter job listings
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageWrapper>
      <div className="container mx-auto mt-8 px-8 overflow-y-auto h-full text-gray-500">
        <h1 className="text-3xl font-bold mb-4">Job Search Board</h1>
        {/* Search/filter input */}
        <input
          type="text"
          placeholder="Search by title, company, location, or type"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mb-4"
        />
        {/* Job listings */}
        <div>
          {filteredJobs.length === 0 ? (
            <p className="text-gray-500">No jobs found.</p>
          ) : (
            <ul>
              {currentJobs.map((job) => (
                <li
                  key={job.id}
                  className="border border-gray-300 rounded-lg p-4 mb-4"
                >
                  <h2 className="text-lg font-semibold">{job.title}</h2>
                  <p className="text-sm text-gray-600">
                    {job.company} - {job.location} - {job.type}
                  </p>
                </li>
              ))}
            </ul>
          )}
          {/* Pagination */}
          {filteredJobs.length > itemsPerPage && (
            <div className="flex justify-center mt-4">
              {Array.from(
                { length: Math.ceil(filteredJobs.length / itemsPerPage) },
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`mx-1 px-3 py-1 rounded-md ${
                      currentPage === i + 1
                        ? "bg-purple-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default JobSearchBoard;
