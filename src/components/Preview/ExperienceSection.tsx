import React from 'react';
import type { Experience as ExperienceType } from '../../types/cv.types';

type ExperienceSectionProps = {
  experiences: ExperienceType[];
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <section className="mb-8">
      <h3 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4">Experiência Profissional</h3>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-lg text-gray-800">{exp.jobRole || 'Título do Cargo'}</h4>
              <p className="text-gray-700">{exp.company || 'Nome da Empresa'}</p>
            </div>
            <p className="text-gray-500 text-sm">{exp.startDate || 'YYYY-MM'} - {exp.endDate || 'Presente'}</p>
          </div>
          <p className="mt-2 text-gray-600 leading-relaxed text-sm">
            {exp.description || 'Descrição das suas responsabilidades e conquistas. Use a IA para aprimorar essa seção.'}
          </p>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;