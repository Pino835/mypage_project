// src/pages/Home.js
import React from 'react';
import './Home.css';
import profileImage from '../assets/images/profile.jpg';

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <h1>Juan Diego Pino Torres</h1>
        <h2>Software Engineer</h2>
        <p>
          Professional at the beginning of my career, focused on continuous learning and developing technological
          solutions. During my training, I gained skills in web development, database analysis, project management,
          and technological innovation. My goal is to grow as a Software Developer, contribute to challenging projects,
          and refine my expertise while expanding my experience in the field.
        </p>
      </div>
      <img src={profileImage} alt="Profile" className="profile-image"/>
    </div>
  );
}

export default Home;