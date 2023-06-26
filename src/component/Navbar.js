import React from 'react';
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import data from '../data/data.json'; // Replace '../path/to/data.json' with the actual path to your JSON file.

export default function Navbar() {
  // Access the data from the imported JSON file
  const logo = data.logo;

  return (
    <div className='nav'>
      <div className='logo'>
        <Link to="/">
          <img id="logoimage" src={logo} alt="Logo" />
        </Link>
        </div>
        <Link className='navlinks' to="/miphone">Mi Phones</Link>
        <Link  className='navlinks'to="/redmiphones">Redmi Phones</Link>
        <Link  className='navlinks'to="/tv">Tv</Link>
        <Link  className='navlinks'to="/laptops">Laptop</Link>
        <Link  className='navlinks'to="/lifestyle">Lifestyle</Link>
        <Link  className='navlinks'to="home">Home</Link>
        <Link  className='navlinks'to="audio">Audio</Link>
        <Link  className='navlinks'to="accessories">Accessories</Link>
        
        <div className='searchbox'><i className="fa fa-search" aria-hidden="true"></i>
          <input type='text ' name='search' placeholder='search products'/>
        </div>

      
    </div>
  );
}
