import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './BooksSlice';

export default configureStore({
  reducer: {
    books: booksReducer
  }
});

