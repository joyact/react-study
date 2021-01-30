import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetail from './BookDetail';

function Booklist() {
  const { books } = useContext(BookContext);
  console.log(books);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <BookDetail book={book} key={book.id} />
        ))}
      </ul>
    </div>
  ) : (
    // if list is empty
    <div className="empty">No books to read. Happy free time :)</div>
  );
}

export default Booklist;
