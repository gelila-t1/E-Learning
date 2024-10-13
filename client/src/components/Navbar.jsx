import React, { useState } from 'react';
import logo from '../assets/logoclick.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
     
      <button className="toggle-button" onClick={toggleNavbar}>
        {isOpen ? '✖' : '☰'}
      </button>
      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;