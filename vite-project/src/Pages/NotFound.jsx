import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => (
  <div className="notfound-container">
    <h2>404 - Page Not Found</h2>
    <Link to="/">Back to Home</Link>
  </div>
);

export default NotFound;



