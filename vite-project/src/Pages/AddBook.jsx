import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../utils/BooksSlice';
import BookForm from '../Components/SearchBar';
import './AddBook.css'

function AddBook(){
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddBook = (data) => {
    const newBook = { ...data, id: Date.now().toString() };
    dispatch(addBook(newBook));
    navigate(`/books/${data.category}`);
  };

  return (
    <div>
      <h2 className='AddBook-heading'>Add a New Book</h2>
      <BookForm onSubmit={handleAddBook} />
    </div>
  );
};

export default AddBook;

