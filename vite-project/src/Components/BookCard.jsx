import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/BrowseBooks.css'

const BookCard = ({ book }) => (
  <div className="book-card">
    <img src={book.coverImage} alt={book.title} />
    <h3>{book.title}</h3>
    <p>Author: {book.author}</p>
    <p>Rating: {book.rating}</p>
    <Link className='bookcard-link' to={`/book/${book.id}`}>View Details</Link>
  </div>
);

export default BookCard;


