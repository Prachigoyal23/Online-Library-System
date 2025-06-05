import { createSlice } from '@reduxjs/toolkit';
import books from './mockBooks';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    list: books,
  },
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;

