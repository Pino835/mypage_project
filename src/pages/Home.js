// src/pages/Home.js
import React from 'react';
import './Home.css';
import profileImage from '../assets/images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub as fabGithub, faLinkedin as fabLinkedin } from '@fortawesome/free-brands-svg-icons';
import videoFile from '../assets/video.mp4';

const Home = () => {
  return (
    <div id='main' className='main-content'>

      <div id='home' className="home-container">

        <hr/>

        <h1>Juan Diego Pino Torres</h1>
        <h2>Ingeniero Informático</h2>
        <img src={profileImage} alt="Profile"/>

      </div>

      <hr/>

      <div id='video' className='video-container'>

        <hr/>

        <h1>Video</h1>

        <div className="video-wrapper">
          <video className="center-video" controls>
            <source src={videoFile} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
      </div>

      <hr/>

      <div id='about' className="about-container">

        <hr/>

        <h1>Perfil</h1>
        <p>
        Profesional que está iniciando su carrera, enfocado en el aprendizaje continuo y el desarrollo de soluciones
        tecnológicas. Durante mi formación, adquirí habilidades en desarrollo web, análisis de bases de datos,
        gestión de proyectos e innovación tecnológica. Mi objetivo es crecer como profesional en el área de
        informática, contribuir a proyectos desafiantes y refinar mis conocimientos mientras amplío mi experiencia en
        el campo.
        </p>

      </div>

      <hr/>

      <div id='skill' className="skill-container">

      <hr/>

      <h1>Habilidades Técnicas</h1>
        <ul>
          <li>
            Lenguajes de Proogramación:
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </li>
          <li>
            Frameworks y herramientas:
            <ul>
              <li>Django</li>
              <li>React</li>
              <li>.NET</li>
            </ul>
          </li>
          <li>
            Sistemas Operativos:
            <ul>
              <li>Linux</li>
              <li>Windows</li>
            </ul>
          </li>
          <li>
            Software Ciberseguridad:
            <ul>
              <li>Nessus</li>
              <li>Burp Suite</li>
            </ul>
          </li>
          <li>
            Otros:
            <ul>
              <li>Redes</li>
              <li>Ciberseguridad</li>
            </ul>
          </li>
        </ul>

        <a href="/files/resume.pdf" download="My_Resume.pdf">
          <FontAwesomeIcon icon={faDownload} /> Descargar CV
        </a>

      </div>

      <hr/>

      <div id='work' className="work-container">

        <hr/>

        <h1>Experiencia</h1>
        <ul>
          <li>
              Programador y Analista de Seguridad Jr, ITCJJ INFORMATION
            <ul>
              <li>
                Set 2023 - Presente
              </li>
              <p>
                Desarrollo de un proyecto sobre una página web utilizando Django que agiliza el proceso de trabajo
                para generar reportes y que el cliente tenga esa página disponible para revisar dichos reportes y
                evitar el uso excesivo del correo electrónico.
                Colaboración auditorías donde se buscan vulnerabilidades dentro de las redes de los clientes a
                través de escaneos utilizando un software de seguridad, usando herramientas como Nessus y
                OSINT.
              </p>
            </ul>
          </li>
          <li>
            Programador Jr, Global Teams International
            <ul>
              <li>
                Ene 2022 - Ago 2022
                </li>
              <p>
              Desarrollo de un sitio web sobre un sistema de gestión de registros para un cliente utilizando la
              metodología SCRUM y trabajando con herramientas como Visual Studio, C# y SQL Server.
              </p>
            </ul>
          </li>
        </ul>

      </div>

      <hr/>

      <div id='education' className="education-container">

        <hr/>

        <h1>Educación</h1>
        <ul>
          <li>
            Licenciatura en Desarrollo de Software
            <ul>
              <li>Ene 2023 -  Abr 2024</li>
              <li>Universidad Latinoamericana de Ciencia y Tecnología</li>
            </ul>
          </li>
          <li>
            Bachillerato en Ingeniería Informática
            <ul>
              <li>Ene 2020 - May 2023</li>
              <li>Universidad Latinoamericana de Ciencia y Tecnología</li>
            </ul> 
          </li>
        </ul>

      </div>

      <hr/>

      <div id='add' className="add-container">

        <hr/>

        <h1>Datos Adicionales</h1>
        <ul>
          <li>Idiomas:
            <ul>
              <li>Español (native)</li>
              <li>Inglés (B2)</li>
            </ul>
          </li>
          <li>Certificaciones:
            <ul>
            <li>Colegiatura (CPIC)</li>
              <li>Diseño Web HTML5 y CSS3 (ULACIT)</li>
              <li>Arquitectura Web (ULACIT)</li>
              <li>Responsive Web Design (FreeCodeCamp)</li>
              <li>Python esencial (LinkedIn)</li>
              <li>SQL Server 2022 para desarrolladores esenciales (LinkedIn)</li>
              <li>HTML esencial (LinkedIn)</li>
              <li>CSS Esencial (LinkedIn)</li>
            </ul>
          </li>
        </ul>

      </div>

      <hr/>

      <div id='contact' className="contact-container">

        <hr/>

        <h1>Contacto</h1>
        <ul>
          <li><FontAwesomeIcon icon={faEnvelope} /> pinoto2002@gmail.com</li>
          <li><a href="https://www.linkedin.com/in/juan-diego-pino-torres-b80856322" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={fabLinkedin} /> LinkedIn</a></li>
          <li><a href="https://www.github.com/Pino835" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={fabGithub} /> GitHub</a></li>
        </ul>

      </div>

      <hr/>

    </div>

    
  );
}

export default Home;