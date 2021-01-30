import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

function Booklist() {
  const { books } = useContext(BookContext);
  console.log(books);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - '{book.author}'
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Happy free time :)</div>
  );
}

export default Booklist;
