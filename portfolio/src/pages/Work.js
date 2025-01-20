import React from 'react';
import './Work.css'; // Si necesitas estilos específicos para esta página

const Work = () => {
  return (
    <div className="work-container">
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
  );
};

export default Work;