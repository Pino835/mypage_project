import React from 'react';
import './Skill.css'; // Si necesitas estilos específicos para esta página

const Skill = () => {
  return (
    <div className="skill-container">
      <h1>Skills</h1>
      <ul>
        <li>
          Programming languages: HTML, CSS, JavaScript, Python
        </li>
        <li>
          Frameworks and tools: Django, React, .NET 
        </li>
        <li>
          Operating systems: Linux, Windows
        </li>
        <li>
          Cybersecurity software: Nessus, Burp Suite 
        </li>
        <li>
          Others: Networks, Cybersecurity 
        </li>
      </ul>
    </div>
  );
};

export default Skill;