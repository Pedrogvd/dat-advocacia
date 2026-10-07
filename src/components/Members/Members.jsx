import React from 'react';
import './Members.css';
import italoImg from '../../assets/teamItaloPhoto.jpg';
import flavioImg from '../../assets/teamFlavioPhoto.jpg';
import marianeImg from '../../assets/teamMarianePhoto.jpg';

const TEAM = [
  {
    img: italoImg,
    name: 'Ítalo Guilherme Andrade Silva',
    role: 'Sócio',
    oab: 'OAB/MG 239.380',
    bio: 'Atua em Direito Civil, Trabalhista e Penal, com atendimento direto ao cliente em cada fase do processo.',
  },
  {
    img: flavioImg,
    name: 'Flávio Gabriel Diniz',
    role: 'Sócio',
    oab: 'OAB/MG 227.917',
    bio: 'Filho do fundador, carrega a continuidade da banca. Atua em Direito Civil, de Família, Previdenciário e Sucessório.',
  },
  {
    img: marianeImg,
    name: 'Mariane Cristina Turíbio',
    role: 'Sócia',
    oab: 'OAB/MG 244.085',
    bio: 'Atua em Direito Civil, Médico e Penal, com atenção especial a casos que envolvem saúde e responsabilidade.',
  },
];

const Members = () => {
  return (
    <section id="members" className="members-section">
      <h2>Quem somos?</h2>
      <p className="description">
        Nossa equipe é formada por três advogados especializados em diferentes áreas do Direito.
        Cada sócio traz experiência própria para oferecer um atendimento completo aos nossos clientes.
      </p>
      <div className="members-grid">
        {TEAM.map((member) => (
          <div className="member-card" key={member.name}>
            <img src={member.img} alt={member.name} className="member-photo" />
            <div className="member-info">
              <p className="member-role">{member.role} · {member.oab}</p>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;