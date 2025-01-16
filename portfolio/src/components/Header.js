// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Mi Página React</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
  },
  navItem: {
    display: 'inline',
    margin: '0 10px',
  }
}

export default Header;