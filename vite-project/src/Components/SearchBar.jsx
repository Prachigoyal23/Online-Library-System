import React, { useState } from 'react';
import '../Pages/AddBook.css'

const SearchBar = ({ onSubmit }) => {
  const [form, setForm] = useState({
    title: '', author: '', category: '', coverImage: '', description: '', rating: '', 
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(form).some(val => !val.trim())) {
      setError('All fields are required');
      return;
    }
    onSubmit(form);
  };

  return (
    <div className='addbook-form'>
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
      <input name="rating" placeholder="Rating" value={form.rating} onChange={handleChange} />
      <input name="coverImage" placeholder="Cover Image URL" value={form.coverImage} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange}></textarea>
      <button type="submit">Add Book</button>
    </form>
    </div>
  );
};

export default SearchBar;


