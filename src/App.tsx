import React from 'react';
import FormSection from './components/Layout/FormSection';
import PreviewSection from './components/Layout/PreviewSection';
import { useCVData } from './hooks/useCVData';

const App: React.FC = () => {
  const { cvData, handlePersonalInfoChange, addSkill, removeSkill, addExperience, removeExperience, handleExperienceChange,handleEnhanceDescription, handleDescriptionUpdate, updateSkillProficiency } = useCVData();


  return (
    <div className="flex w-full h-screen bg-gray-100 font-sans">
      <FormSection
        handlePersonalInfoChange={handlePersonalInfoChange}
        addSkill={addSkill}
        removeSkill={removeSkill}
        addExperience={addExperience}
        removeExperience={removeExperience}
        handleExperienceChange={handleExperienceChange}
        handleDescriptionUpdate={handleDescriptionUpdate}
        handleEnhanceDescription={handleEnhanceDescription}
        updateSkillProficiency={updateSkillProficiency}
        cvData={cvData}
      />
      <PreviewSection data={cvData} />
    </div>
  );
};

export default App
