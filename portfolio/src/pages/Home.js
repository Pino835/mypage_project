// src/pages/Home.js
import React from 'react';
import './Home.css';
import profileImage from '../assets/images/profile.jpg';

const Home = () => {
  return (
    <div className='main-content'>

      <div id='home' className="home-container">
        <h1>Juan Diego Pino Torres</h1>
        <h2>Software Engineer</h2>
        <img src={profileImage} alt="Profile"/>
      </div>

      <div id='about' className="about-container">
        <h1>Profile</h1>
        <p>
          Professional at the beginning of my career, focused on continuous learning and developing technological
          solutions. During my training, I gained skills in web development, database analysis, project management,
          and technological innovation. My goal is to grow as a Software Developer, contribute to challenging projects,
          and refine my expertise while expanding my experience in the field.
        </p>
      </div>

      <div id='skill' className="skill-container">
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

      <div id='work' className="work-container">
        <h1>Work</h1>
        <ul>
          <li>
            Programmer and Security Analyst Jr, ITCJJ INFORMATION
            <p>
              Sep 2023 - Present
            </p>
            <p>
              Development of a project on a web page using Django that speeds up the work process to generate
              reports and that the client has that page available to review those reports and avoid excessive use
              of email. Collaborate in audits where vulnerabilities within the clients' networks are searched through scans
              using a security software.
            </p>
          </li>
          <li>
            Programmer Jr, Global Teams International
            <p>
              January 2022 - Aug 2022
            </p>
            <p>
              I was part of the development of a website about a records management system for a client using
              the SCRUM methodology and working with tools such as Visual Studio, C# and SQL Server.
            </p>  
          </li>
        </ul>
      </div>

      <div id='education' className="education-container">
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

      <div id='add' className="add-container">
        <h1>Add</h1>
        <ul>
          <li>Languages: Spanish (native), English.</li>
          <li>Certifications: HTML5 and CSS3 Web Design (ULACIT), Web Architecture (ULACIT)</li>
        </ul>
      </div>

      <div id='contact' className="contact-container">
        <h1>Contact</h1>
        <ul>
          <li>(+506) 8413-3753</li>
          <li>pinoto2002@gmail.com</li>
          <li>www.linkedin.com/in/juan-diego-pino-torres-b80856322</li>
          <li>www.github.com/Pino835</li>
        </ul>
      </div>

    </div>

    
  );
}

export default Home;