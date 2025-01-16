// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h2>Bienvenidos a mi página web</h2>
      <p>Esta es una página de ejemplo creada con React.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  }
}

export default Home;