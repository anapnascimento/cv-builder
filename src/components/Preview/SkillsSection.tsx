import React from 'react';
import type { Skill as SkillType } from '../../types/cv.types';

type SkillsSectionProps = {
  skills: SkillType[];
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  if (skills.length === 0) {
    return null;
  }

  return (
    <section className="mb-8">
      <h3 className="text-xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 mb-4">Habilidades</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-gray-800">{skill.name}</h4>
            <p className="text-sm text-gray-600">Nível: {skill.proficiency}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;