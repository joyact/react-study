import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import BookForm from './components/BookForm';

function App() {
  return (
    <BookContextProvider>
      <Navbar />
      <Booklist />
      <BookForm />
    </BookContextProvider>
  );
}

export default App;
