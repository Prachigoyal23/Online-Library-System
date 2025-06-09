import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../Components/BookCard';
import './BrowseBooks.css';

function BrowseBooks(){
  const { category } = useParams();
  const navigate = useNavigate();
  const books = useSelector(state => state.books.list);
  const [search, setSearch] = useState('');

  const categories = ['All', ...new Set(books.map(book => book.category))];

  const filtered = books.filter(book =>
    (!category || category.toLowerCase() === 'all' || book.category.toLowerCase() === category.toLowerCase()) &&
    (book.title.toLowerCase().includes(search.toLowerCase()) ||
     book.author.toLowerCase().includes(search.toLowerCase()))
  );

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    navigate(`/books/${selectedCategory.toLowerCase()}`);
  };

  return (
    <div className="browse-container">
      <h1 className="browse-heading">{category} Books</h1>
      
      <div className="filters">
        <select className="category-dropdown" onChange={handleCategoryChange} value={category?.toLowerCase() || 'all'}>
          {categories.map(cat => (
            <option key={cat} value={cat.toLowerCase()}>{cat}</option>
          ))}
        </select>
        
        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />
      </div>

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










