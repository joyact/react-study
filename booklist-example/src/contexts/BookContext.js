import React, { createContext, useEffect, useReducer } from 'react';

export const BookContext = createContext();

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: Date.now(),
        },
      ];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

function BookContextProvider({ children }) {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
