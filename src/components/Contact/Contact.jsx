import React from 'react';
import './Contact.css';
import gmailIcon from '../../assets/mailIconWhite.png';

const TEAM = [
  { name: 'Ítalo Guilherme Andrade Silva', oab: 'OAB/MG 239.380', email: 'italoandrade@datadvocacia.com.br' },
  { name: 'Flávio Gabriel Diniz', oab: 'OAB/MG 227.917', email: 'flaviodiniz@datadvocacia.com.br' },
  { name: 'Mariane Cristina Turíbio', oab: 'OAB/MG 244.085', email: 'marianeturibio@datadvocacia.com.br' },
];

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Entre em Contato</h2>
      <p className="contact-intro">
        Fale com a nossa equipe por e-mail ou WhatsApp, ou venha até o escritório.
      </p>

      <div className="contact-central">
        <div className="contact-central-item">
          <img src={gmailIcon} alt="Ícone de e-mail" className="contact-icon" />
          <a href="mailto:atendimento@datadvocacia.com.br">atendimento@datadvocacia.com.br</a>
        </div>
        <p className="contact-address">
          Av. Augusto de Lima, 1800 · Sala 908 · Barro Preto<br />
          Belo Horizonte · MG · CEP 30190-008
        </p>
      </div>

      <div className="contact-details">
        {TEAM.map((member) => (
          <div className="contact-card" key={member.email}>
            <h3>{member.name}</h3>
            <p className="contact-oab">{member.oab}</p>
            <div className="contact-item">
              <img src={gmailIcon} alt="Ícone de e-mail" className="contact-icon" />
              <p className="contact-text">
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </p>
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://wa.me/5531971567039"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-cta"
      >
        Falar no WhatsApp
      </a>
    </section>
  );
};

export default Contact;