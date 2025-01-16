// src/components/Header.js
import React from 'react';
import './Header.css';  // Importa el archivo CSS para este componente

const Header = () => {
  return (
    <header className="header">
      <h1>Portfolio</h1>
      <nav>
        <ul className="navList">
          <li className="navItem"><a href="/" className="navLink">Home</a></li>
          <li className="navItem"><a href="/skills" className="navLink">Skills</a></li>
          <li className="navItem"><a href="/work" className="navLink">Work Experience</a></li>
          <li className="navItem"><a href="/education" className="navLink">Education</a></li>
          <li className="navItem"><a href="/add" className="navLink">Additonal Info</a></li>
          <li className="navItem"><a href="/contact" className="navLink">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;