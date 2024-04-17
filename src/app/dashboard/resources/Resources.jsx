"use client"

import React, { useState, useEffect } from 'react';
import PageWrapper from '../../Components/Reusables/Wrapers/PageWrappper';
import SearchBar from './SearchBar';
import BooksGrid from './BookGrid';
import Pagination from './Paginatioin';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 9;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`http://openlibrary.org/search.json?q=${searchTerm}`);
        if (!response.ok) {
          throw new Error('Failed to fetch book data');
        }
        const data = await response.json();
        if (data.docs) {
          const formattedBooks = data.docs.map(book => ({
            title: book.title,
            author: book.author_name ? book.author_name.join(', ') : 'Unknown author',
            cover: book.cover_i ? `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null,
            key: book.key,
          }));
          setBooks(formattedBooks);
        } else {
          setBooks([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (searchTerm.trim() !== '') {
      fetchBooks();
    } else {
      setBooks([]);
    }
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const displayedBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(books.length / booksPerPage);

  return (
    <PageWrapper>
      <div className="container mx-auto my-8 px-8 gap-y-4 text-gray-500">
        <h1 className="text-3xl font-bold mb-8 text-gray-500">Books</h1>
        <SearchBar placeholder="Search books..." onSearch={handleSearch} />
        <BooksGrid books={displayedBooks} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </PageWrapper>
  );
};

export default BooksPage;
