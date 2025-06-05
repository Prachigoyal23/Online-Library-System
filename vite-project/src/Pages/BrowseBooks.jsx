import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../Components/BookCard';
import './BrowseBooks.css'

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector(state => state.books.list);
  const [search, setSearch] = useState('');

  const filtered = books.filter(book =>
  (!category || category.toLowerCase() === 'all' || book.category.toLowerCase() === category.toLowerCase()) &&
  (book.title.toLowerCase().includes(search.toLowerCase()) ||
   book.author.toLowerCase().includes(search.toLowerCase()))
);


  return (
    <div className="browse-container">
      <h1 className="browse-heading">{category} Books</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '20px', padding: '5px', width: '300px' }}
        className="search"
      />
       {filtered.length > 0 ? (
        <div className="book-list">
          {filtered.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="no-books">No books found in this category.</p>
      )}
    </div>
  );
};

export default BrowseBooks;









