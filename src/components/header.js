import React from 'react';
import './header.css';

function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <header className="header-container">
      <h1 className='header-color' >1o1Cloud Solutions</h1>
      <nav className="fixed-navbar">
        <ul>
          <li><a href="#home" onClick={scrollToTop}>Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
