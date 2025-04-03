import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser, faBriefcase, faGraduationCap, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referencia para detectar clics fuera del menú

  // Cierra el menú si se hace clic fuera del header
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <header ref={menuRef} className={`vertical-header ${menuOpen ? 'open' : ''}`}>
        <h1>Portfolio</h1>
        <nav>
          <ul className="vertical-nav-list">
            <li><a href="#main" onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faHome} /> Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faUser} /> About</a></li>
            <li><a href="#work" onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faBriefcase} /> Work Experience</a></li>
            <li><a href="#education" onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faGraduationCap} /> Education</a></li>
            <li><a href="#add" onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faInfoCircle} /> Additional Info</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
