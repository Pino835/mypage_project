// src/pages/Home.js
import React from 'react';
import './Home.css';
import profileImage from '../assets/images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub as fabGithub, faLinkedin as fabLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div id='main' className='main-content'>

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

        <h1>Skills</h1>
        <ul>
          <li>
            Programming languages:
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </li>
          <li>
            Frameworks and tools:
            <ul>
              <li>Django</li>
              <li>React</li>
              <li>.NET</li>
            </ul>
          </li>
          <li>
            Operating systems:
            <ul>
              <li>Linux</li>
              <li>Windows</li>
            </ul>
          </li>
          <li>
            Cybersecurity software:
            <ul>
              <li>Nessus</li>
              <li>Burp Suite</li>
            </ul>
          </li>
          <li>
            Others:
            <ul>
              <li>Networks</li>
              <li>Cybersecurity</li>
            </ul>
          </li>
        </ul>

        <a href="/files/resume.pdf" download="My_Resume.pdf">
          <FontAwesomeIcon icon={faDownload} /> Download Resume
        </a>

      </div>

      <div id='work' className="work-container">

        <h1>Work</h1>
        <ul>
          <li>
            Programmer and Security Analyst Jr - ITCJJ INFORMATION
            <ul>
              <li>Sep 2023 - Present</li>
              <p>
                Development of a project on a web page using Django that speeds up the work process to generate
                reports and that the client has that page available to review those reports and avoid excessive use
                of email. Collaborate in audits where vulnerabilities within the clients' networks are searched through scans
                using a security software.
              </p>
            </ul>
          </li>
          <li>
            Programmer Jr - Global Teams International
            <ul>
              <li>January 2022 - Aug 2022</li>
              <p>
                I was part of the development of a website about a records management system for a client using
                the SCRUM methodology and working with tools such as Visual Studio, C# and SQL Server.
              </p>
            </ul>
          </li>
        </ul>

      </div>

      <div id='education' className="education-container">

        <h1>Education</h1>
        <ul>
          <li>
            Bachelor's degree of Software Development
            <ul>
              <li>Jan 2023 - April 2024</li>
              <li>Universidad Latinoamericana de Ciencia y Tecnología</li>
            </ul>
          </li>
          <li>
            Bachelor of Computer Engineering
            <ul>
              <li>Jan 2020 - May 2023</li>
              <li>Universidad Latinoamericana de Ciencia y Tecnología</li>
            </ul> 
          </li>
        </ul>

      </div>

      <div id='add' className="add-container">

        <h1>Additional Information</h1>
        <ul>
          <li>Languages:
            <ul>
              <li>Spanish (native)</li>
              <li>English</li>
            </ul>
          </li>
          <li>Certifications:
            <ul>
              <li>HTML5 and CSS3 Web Design (ULACIT)</li>
              <li>Web Architecture (ULACIT)</li>
            </ul>
          </li>
        </ul>

      </div>

      <div id='contact' className="contact-container">

        <h1>Contact</h1>
        <ul>
          <li><FontAwesomeIcon icon={faEnvelope} /> pinoto2002@gmail.com</li>
          <li><a href="https://www.linkedin.com/in/juan-diego-pino-torres-b80856322" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={fabLinkedin} /> LinkedIn</a></li>
          <li><a href="https://www.github.com/Pino835" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={fabGithub} /> GitHub</a></li>
        </ul>

      </div>

    </div>

    
  );
}

export default Home;