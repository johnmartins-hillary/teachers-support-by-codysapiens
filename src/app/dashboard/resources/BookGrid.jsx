import React from 'react';
import BookCard from './BookCard';
import Loader from "../../Components/Loaders/PulseLoader"

const BooksGrid = ({ books, loading }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {loading ? <Loader color="#a855f7" size={14}/> : <>
        {books?.length > 0 && books?.map((book, index) => (
          <BookCard
            key={index}
            image={book?.coverId ? `http://covers.openlibrary.org/b/id/${book.coverId}-M.jpg` : 'https://via.placeholder.com/150'} // Provide a placeholder image URL if coverId is not available
            title={book?.title}
            author={book?.author}
            description={book?.description}
          />
        ))       
        } </>
        }    
    </div>
  );
};

export default BooksGrid;
