import React from 'react';
import './LandingPage.css'; // Importa un archivo CSS para los estilos

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="menu">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#caracteristicas">Características</a></li>
            <li><a href="#registro">Registro</a></li>
          </ul>
        </nav>
      </header>
      <section className="main-content">
        <h1 className="title">Bienvenido a CollabCode</h1>
        <p className="subtitle">Tu plataforma para colaborar en proyectos de código abierto</p>
        {/* Más contenido principal aquí */}
      </section>
      {/* Más secciones o contenido */}
    </div>
    );
    
}

export default LandingPage;