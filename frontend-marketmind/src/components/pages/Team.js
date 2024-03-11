import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: 'OMKAR KUBAL',
    linkedin: 'https://www.linkedin.com/in/omkar-kubal-686019265/',
    image: 'images/omkar.png',
    id: '16010120025',
    description: 'Team Member',
  },
  {
    name: 'MAHIR MEHTA',
    linkedin: 'https://www.linkedin.com/in/mahir-mehta/',
    image: 'images/mahir.jpeg',
    id: '16010120029',
    description: 'Team Member',
  },
  {
    name: 'SOHAM SHAH',
    linkedin: 'https://www.linkedin.com/in/soham-shah-95411921a/',
    image: 'images/soham.jpeg',
    id: '16010120046',
    description: 'Team Member',
  },
];

function TeamMember({ name, linkedin, image, id, description }) {
  return (
    <div className='team'>
      <a href={linkedin} target='_blank' rel='noopener noreferrer'>
        <img src={image} alt={`${name} Profile`} className='profile-image' />
        <h2>{name}</h2>
      </a>
      <p>{id}</p>
      <p className='description'>{description}</p>
    </div>
  );
}

function Team() {
  return (
    <div className='team-container'>
      <h1>Team MarketMind</h1>
      <div className='teams'>
        {teamMembers.map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}

 

export default Team;
