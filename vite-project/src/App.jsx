import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/HomePage';
import BrowseBooks from './Pages/BrowseBooks';
import BookDetails from './Pages/BookDetails';
import AddBook from './Pages/AddBook';
import NotFound from './Pages/NotFound';

function App(){
  return (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:category" element={<BrowseBooks />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/add" element={<AddBook />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  );
};

export default App;




