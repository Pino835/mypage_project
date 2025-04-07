import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser, faTools, faBriefcase, faGraduationCap, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
        <h1>Portafolio</h1>
        <hr/>
        <nav>
          <ul className="vertical-nav-list">
            <li><a href="#main" onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faHome} /> Inicio</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faUser} /> Sobre mí</a></li>
            <li><a href="#skill" onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faTools} /> Habilidades Técnicas</a></li>
            <li><a href="#work" onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faBriefcase} /> Experiencia</a></li>
            <li><a href="#education" onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faGraduationCap} /> Educación</a></li>
            <li><a href="#add" onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faInfoCircle} /> Datos Adicionales</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}><FontAwesomeIcon icon={faEnvelope} /> Contacto</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
