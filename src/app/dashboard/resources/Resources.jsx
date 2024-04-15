"use client"

import React, { useState } from "react";
import PageWrapper from "../../Components/Reusables/Wrapers/PageWrappper";
import SearchBar from "./SearchBar";
import BooksGrid from "./BookGrid";
import Pagination from "./Paginatioin";
import {ResourcesData} from "./util"

const ResourcesAndLibraryPage = () => {
   const [books, setBooks] = useState(
     ResourcesData ? ResourcesData : []
    )

  // Search function
  const searchBooks = (searchTerm) => {
    // Simulate searching by filtering books based on title or author
    const filteredBooks = books?.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase()));
    // Update the displayed books
    setDisplayedBooks(filteredBooks);
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 9; // 3 books per row, 3 rows
  const totalBooks = books?.length;
  const totalPages = Math.ceil(totalBooks / booksPerPage);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const displayedBooks = books?.slice(indexOfFirstBook, indexOfLastBook);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <PageWrapper>
    <div className="container mx-auto my-8 px-8 gap-y-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-500">Resources</h1>
      <SearchBar placeholder="Search books..." options={[]} onSearch={searchBooks} />
      <BooksGrid books={displayedBooks} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
    </PageWrapper>
  );
};

export default ResourcesAndLibraryPage;
