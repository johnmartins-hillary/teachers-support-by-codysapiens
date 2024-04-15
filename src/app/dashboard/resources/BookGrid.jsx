import React from 'react';
import BookCard from './BookCard';

const BooksGrid = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {books?.map((book, index) => (
        <BookCard
          key={index}
          image={book?.image}
          title={book?.title}
          author={book?.author}
          description={book?.description}
        />
      ))}
    </div>
  );
};

export default BooksGrid;
