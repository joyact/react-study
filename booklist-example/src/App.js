import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';

function App() {
  return (
    <BookContextProvider>
      <Navbar />
      <Booklist />
    </BookContextProvider>
  );
}

export default App;
