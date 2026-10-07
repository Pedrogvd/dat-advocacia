import React from 'react';
import './MainSection.css';
import History from '../History/History.jsx';
import About from '../About/About.jsx';
import Members from '../Members/Members.jsx';
import Contact from '../Contact/Contact.jsx';

const MainSection = () => {
  return (
    <main>
      <div id="home" className="main-section">
        <div className="overlay"></div>
        <div className="text-overlay">
          <h1>DAT Advocacia</h1>
          <p className="tagline">Tradição que continua atendendo</p>
          <p>
            Um escritório de advocacia com atuação em Direito Civil, de Família, Trabalhista, Penal,
            Previdenciário, Sucessório e Médico. Unimos experiência técnica e atendimento próximo para
            proteger os seus direitos com ética e dedicação.
          </p>
        </div>
      </div>
      <History />
      <About />
      <Members />
      <Contact />
    </main>
  );
};

export default MainSection;