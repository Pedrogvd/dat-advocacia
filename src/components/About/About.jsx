import React from 'react';
import './About.css';

const AREAS = [
  'Direito Civil',
  'Direito de Família',
  'Direito Trabalhista',
  'Direito Penal',
  'Direito Previdenciário',
  'Direito Sucessório',
  'Direito Médico',
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>Sobre a DAT Advocacia</h2>
        <p>
          A DAT Advocacia reúne profissionais especializados em diferentes áreas do Direito para oferecer
          um atendimento completo e humanizado. Nosso compromisso é proteger os interesses de cada cliente
          com ética, transparência e dedicação, do primeiro atendimento até a solução do seu caso.
        </p>

        <div className="specialties-container">
          <h3>Áreas de atuação</h3>
          <div className="specialty-tags">
            {AREAS.map((area) => (
              <span className="specialty-tag" key={area}>{area}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;