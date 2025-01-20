import React from 'react';
import './Education.css'; // Si necesitas estilos específicos para esta página

const Education = () => {
  return (
    <div className="education-container">
      <h1>Education</h1>
      <ul>
        <li>
          Bachelor's degree of Software Development
          <p>
            Jan 2023 - April 2024
          </p>
          <p>
            Universidad Latinoamericana de Ciencia y Tecnología
          </p>
        </li>
        <li>
          Bachelor of Computer Engineering
          <p>
            Jan 2020 - May 2023
          </p>
          <p>
            Universidad Latinoamericana de Ciencia y Tecnología
          </p>  
        </li>
      </ul>
    </div>
  );
};

export default Education;