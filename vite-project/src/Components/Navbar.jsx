import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { RiAccountPinBoxFill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => (
  <>
  
  <nav className='navigation' style={{ padding: '10px', backgroundColor: '#eee' }}>
    <Link className='nav-link' to="/" style={{ margin: '0px 35px', textDecoration:'none'}}>Home</Link>
    <Link className='nav-link' to="/books/all" style={{ margin: '0px 35px', textDecoration:'none'}}>Browse Books</Link>
    <Link className='nav-link' to="/add" style={{ margin: '0px 35px', textDecoration:'none'}}>Add Book</Link>
    <div className='icons'>
      <RiAccountPinBoxFill style={{width:'20px', height:'20px'}}/>
      <FaCartPlus style={{width:'20px', height:'20px'}}/>
    </div>
    
  </nav>
  
  </>

);

export default Navbar;

