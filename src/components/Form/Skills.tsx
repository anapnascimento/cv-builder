import React, { useState } from 'react';
import type { Skill } from '../../types/cv.types';

type SkillsProps = {
  skills: Skill[];
  addSkill: (skillName: string) => void;
  removeSkill: (index: number) => void;
  updateSkillProficiency: (index: number, newProficiency: 'Básico' | 'Intermediário' | 'Avançado') => void;

};

const Skills: React.FC<SkillsProps> = ({ skills, addSkill, removeSkill, updateSkillProficiency }) => {
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      addSkill(newSkill);
      setNewSkill('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Habilidades</h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          placeholder="Adicionar habilidade..."
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleAddSkill}
          className="ml-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors duration-300"
        >
          Adicionar
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full transition-colors duration-200 group-hover:bg-red-100 group-hover:text-red-800"
          >
            <span>{skill.name}</span>

            <select
              value={skill.proficiency}
              onChange={(e) =>
                updateSkillProficiency(
                  index,
                  e.target.value as 'Básico' | 'Intermediário' | 'Avançado'
                )
              }
              className="text-sm text-blue-800 bg-transparent focus:outline-none"
            >
              <option value="Básico">Básico</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <span
              onClick={() => removeSkill(index)}
              className="text-blue-300 hover:text-red-300 cursor-pointer"
              title="Remover"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 -mr-1" viewBox="0 0 20 20" fill="currentColor" > <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /> </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;