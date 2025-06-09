import React from 'react';
import { useSelector } from 'react-redux';
import books from '../utils/mockBooks'; // or use Redux if books are stored there
import { Link } from 'react-router-dom';
import '../App.css'
import { useState } from 'react';

function Home(){
  // If using Redux:
  // const books = useSelector((state) => state.books.books);

  // Get unique categories
  const categories = [...new Set(books.map(book => book.category))];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Example: Select top 3 popular books by rating
  const popularBooks = [...books]
    .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    .slice(0, 5);

    // Filter books by category and search
  const filteredBooks = books.filter(book =>
    (selectedCategory === 'All' || book.category === selectedCategory) &&
    (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     book.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>

      {/* Header */}

      <div className='header'>
        <div className='header-content'>
          <h1>WELCOME TO THE ONLINE LIBRARY !</h1>
          <h3>Join a growing community of book lovers and learners. Whether you're here to study, explore, or just unwind with a good story, we’ve got something for everyone.</h3>
        </div>
      </div>

      {/*  Search Bar */}

      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '10px',
          margin: '20px 5px 10px 15px',
          fontSize: '16px',
          borderRadius: '20px'
        }}
      />
      
      {/* Book Categories */}

      <h2 className='category-heading'>BOOK CATEGORIES</h2>

      <ul className='book-category' style={{ listStyle: 'none', padding: 0 }}>
        <li
        key="All"
        style={{ cursor: 'pointer', marginBottom: '8px', color: selectedCategory === 'All' ? 'blue' : 'black' }}
        onClick={() => setSelectedCategory('All')}
        >
          All
          </li>
          {categories.map(category => (
            <li
            key={category}
            style={{ cursor: 'pointer', marginBottom: '8px', color: selectedCategory === category ? 'blue' : 'black' }}
            onClick={() => setSelectedCategory(category)}
            >
              {category}
              </li>
            ))}
      </ul>

 {/*  Filtered Results */}
      <h2 className='result-heading'>Result: {selectedCategory}</h2>
<div className="book-grid">
  {filteredBooks.map(book => (
    <div key={book.id} className="book-card">
      <img
        src={book.coverImage}
        alt={book.title}
        className="book-image"
      />
      <h4 className="book-title">{book.title}</h4>
      <p className="book-author">{book.author}</p>
      <Link to={`/book/${book.id}`} className="book-link">View Details</Link>
    </div>
  ))}
</div>


     {/* Popular Books */}

      <h2 className="popular-heading">POPULAR BOOKS</h2>
<div className="popular-grid">
  {popularBooks.map(book => (
    <div key={book.id} className="popular-card">
      <img
        src={book.coverImage}
        alt={book.title}
        className="popular-image"
      />
      <h4 className="popular-title">{book.title}</h4>
      <p className="popular-author"><strong>Author:</strong> {book.author}</p>
      <p className="popular-rating"><strong>Rating:</strong> {book.rating}</p>
      <Link to={`/book/${book.id}`} className="popular-link">View Details</Link>
    </div>
  ))}
</div>


    </div>
  );
};

export default Home;





