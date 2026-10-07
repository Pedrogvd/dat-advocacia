import React from 'react';
import './History.css';

const VALUES = [
  'Atendimento pessoal',
  'Transparência',
  'Rigor técnico',
  'Sigilo',
  'Agilidade',
  'Proximidade com o cliente',
  'Tradição familiar',
  'Resultado',
];

const History = () => {
  return (
    <section id="history" className="history-section">
      <div className="history-container">
        <p className="history-eyebrow">Nossa História</p>
        <h2>Uma banca de família na advocacia mineira desde 1981</h2>

        <div className="history-stats">
          <div className="history-stat">
            <span className="history-stat-number">44 anos</span>
            <span className="history-stat-label">de atuação contínua, desde 1981</span>
          </div>
          <div className="history-stat">
            <span className="history-stat-number">2 gerações</span>
            <span className="history-stat-label">da mesma família na banca</span>
          </div>
          <div className="history-stat">
            <span className="history-stat-number">3 sócios</span>
            <span className="history-stat-label">à frente do escritório desde 2024</span>
          </div>
        </div>

        <p className="history-text">
          Fundada em 1981 no Barro Preto, a banca construiu sua reputação em causas cíveis e de família
          — o tipo de demanda que exige escuta antes de técnica. Em 2024, o escritório passou a se chamar
          Diniz Andrade &amp; Turíbio: Flávio Gabriel Diniz, filho do fundador, Ítalo Guilherme Andrade Silva
          e Mariane Cristina Turíbio, colegas de faculdade desde 2019, assumiram como sócios. A banca segue
          na família, agora com mais áreas de atuação e a mesma forma de atender.
        </p>

        <div className="history-values">
          {VALUES.map((value) => (
            <span className="history-tag" key={value}>{value}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;