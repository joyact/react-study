import React, { createContext, useState } from 'react';

export const BookContext = createContext();

function BookContextProvider({ children }) {
  const [books, setBooks] = useState([
    { title: 'the way of kings', id: 1 },
    { title: 'the name of the wind', id: 2 },
    { title: 'the final empire', id: 3 },
    { title: 'the hero of ages', id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
  );
}

export default BookContextProvider;
