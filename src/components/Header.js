import React from 'react';
import './Header.css'; // Estilos separados en un archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faGraduationCap, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="vertical-header">
      <h1>Portfolio</h1>
      <nav>
        <ul className="vertical-nav-list">
          <li><a href="#main"><FontAwesomeIcon icon={faHome} /> Home</a></li>
          <li><a href="#about"><FontAwesomeIcon icon={faUser} /> About</a></li>
          <li><a href="#work"><FontAwesomeIcon icon={faBriefcase} /> Work Experience</a></li>
          <li><a href="#education"><FontAwesomeIcon icon={faGraduationCap} /> Education</a></li>
          <li><a href="#add"><FontAwesomeIcon icon={faInfoCircle} /> Additional Info</a></li>
          <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
