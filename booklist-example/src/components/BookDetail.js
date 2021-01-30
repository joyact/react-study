import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

function BookDetail({ book }) {
  const { dispatch } = useContext(BookContext);
  return (
    // should pass id
    <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
}

export default BookDetail;
