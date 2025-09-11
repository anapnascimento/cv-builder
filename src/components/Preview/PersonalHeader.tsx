import React from 'react';
import type { PersonalInfo as PersonalInfoType } from '../../types/cv.types';

type PersonalHeaderProps = {
  personalInfo: PersonalInfoType;
};

const PersonalHeader: React.FC<PersonalHeaderProps> = ({ personalInfo }) => (
  <header className="mb-8 border-b-2 border-gray-300 pb-4">
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">{personalInfo.fullName || 'Seu Nome'}</h1>
        <h2 className="text-2xl text-blue-600 mt-1">{personalInfo.jobTitle || 'Cargo Desejado'}</h2>
      </div>
      <div className="text-right text-sm text-gray-600">
        <p>{personalInfo.email || 'seu.email@exemplo.com'}</p>
        <p>{personalInfo.phone || '(99) 99999-9999'}</p>
        <p>{personalInfo.linkedin || 'linkedin.com/in/seuperfil'}</p>
        <p>{personalInfo.github || 'github.com/seuperfil'}</p>
      </div>
    </div>
    <p className="mt-4 text-gray-700 leading-relaxed">
      {personalInfo.descriptionSkills || 'Uma breve introdução sobre suas habilidades, experiência e objetivos de carreira!'}
    </p>
  </header>
);

export default PersonalHeader;