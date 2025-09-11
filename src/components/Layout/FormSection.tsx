import React from 'react';
import PersonalInfo from '../Form/PersonalInfo';
import Skills from '../Form/Skills';
import Experience from '../Form/Experience';
import type { CVData } from '../../types/cv.types';

type FormSectionProps = {
  handlePersonalInfoChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  addSkill: (skillName: string) => void;
  removeSkill: (index: number) => void;
  addExperience: () => void;
  removeExperience: (id: string) => void;
  handleExperienceChange: (id: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleEnhanceDescription: (id: string, description: string, company: string) => void;
  handleDescriptionUpdate: (id: string, enhancedDesc: string) => void;
  updateSkillProficiency: (index: number, newProficiency: 'Básico' | 'Intermediário' | 'Avançado') => void;
  cvData: CVData;
};

const FormSection: React.FC<FormSectionProps> = ({
  handlePersonalInfoChange,
  addSkill,
  removeSkill,
  addExperience,
  removeExperience,
  handleExperienceChange,
  handleEnhanceDescription,
  handleDescriptionUpdate,
  updateSkillProficiency,
  cvData
}) => {
  return (
    <div className="w-full md:w-1/2 p-8 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Gerador de Currículo Inteligente</h1>
      <PersonalInfo
        personalInfo={cvData.personalInfo}
        onUpdate={handlePersonalInfoChange}
      />
      <hr className="my-6 border-gray-300" />
      <Skills
        skills={cvData.skills}
        addSkill={addSkill}
        removeSkill={removeSkill}
        updateSkillProficiency={updateSkillProficiency}
      />
      <hr className="my-6 border-gray-300" />
      <Experience
        experiences={cvData.experiences}
        addExperience={addExperience}
        removeExperience={removeExperience}
        handleExperienceChange={handleExperienceChange}
        handleEnhanceDescription={handleEnhanceDescription}
        handleDescriptionUpdate={handleDescriptionUpdate}
      />
    </div>
  );
};

export default FormSection;