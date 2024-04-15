"use client"

import React, { useState } from "react";
import PageWrapper from "../../Components/Reusables/Wrapers/PageWrappper";

// Sample data for resources and library items
const initialResources = [
  {
    id: 1,
    title: "Resource 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Resource 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const initialLibraryItems = [
  { id: 1, title: "Book 1", author: "Author 1", year: 2020, genre: "Fiction" },
  {
    id: 2,
    title: "Book 2",
    author: "Author 2",
    year: 2019,
    genre: "Non-Fiction",
  },
  { id: 3, title: "Book 3", author: "Author 3", year: 2018, genre: "Science" },
  { id: 4, title: "Book 4", author: "Author 4", year: 2017, genre: "History" },
  {
    id: 5,
    title: "Book 5",
    author: "Author 5",
    year: 2016,
    genre: "Biography",
  },
  { id: 6, title: "Book 6", author: "Author 6", year: 2015, genre: "Fiction" },
  {
    id: 7,
    title: "Book 7",
    author: "Author 7",
    year: 2014,
    genre: "Non-Fiction",
  },
  { id: 8, title: "Book 8", author: "Author 8", year: 2013, genre: "Science" },
  { id: 9, title: "Book 9", author: "Author 9", year: 2012, genre: "History" },
  {
    id: 10,
    title: "Book 10",
    author: "Author 10",
    year: 2011,
    genre: "Biography",
  },
];

const ResourcesAndLibraryPage = () => {
  const [resources, setResources] = useState(initialResources);
  const [libraryItems, setLibraryItems] = useState(initialLibraryItems);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLibraryItems = libraryItems.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Search/filter library items
  const filteredLibraryItems = libraryItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageWrapper>
      <div className="container mx-auto my-8 px-8 overflow-y-auto h-full">
        <h1 className="text-3xl font-bold mb-4">Resources and Library</h1>
        {/* Search/filter input */}
        <input
          type="text"
          placeholder="Search by title, author, or genre"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mb-4"
        />
        {/* Library section */}
        <div>
          <h2 className="text-xl font-bold mb-2">Library</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Author</th>
                <th className="px-4 py-2">Year</th>
                <th className="px-4 py-2">Genre</th>
              </tr>
            </thead>
            <tbody>
              {filteredLibraryItems.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="border px-4 py-2">{item.author}</td>
                  <td className="border px-4 py-2">{item.year}</td>
                  <td className="border px-4 py-2">{item.genre}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {Array.from(
              { length: Math.ceil(filteredLibraryItems.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`mx-1 px-3 py-1 rounded-md ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ResourcesAndLibraryPage;
