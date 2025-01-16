// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Skill from './pages/Skill';
import Work from './pages/Work';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
