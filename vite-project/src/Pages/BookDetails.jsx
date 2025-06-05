import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './BookDetails.css'

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector(state => state.books.list.find(b => b.id === id));

  if (!book) return <p className='not-found'>Book not found</p>;

  return (
    <div className="details-container">
      <div className="details-card">
        <img src={book.coverImage} alt={book.title} className="details-image" />
        <div className="details-info">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Category:</strong> {book.category}</p>
          <p><strong>Rating:</strong> {book.rating}</p>
          <p className="details-description"><strong>Description:</strong> {book.description}</p>
          <Link className='back-link' to={`/books/${book.category}`}>Back to Browse</Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;



